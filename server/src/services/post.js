import db from "../models";
const { Op } = require("sequelize");
import { v4 } from "uuid";
import generateCode from "../utils/generateCode";
import moment from "moment-timezone";

// GET all categories
export const getPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.PostPackage,
            as: "postPackages",
            attributes: ["packageId", "status"],
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
        attributes: [
          "id",
          "title",
          "address",
          "description",
          "priceNumber",
          "areaNumber",
          "createdAt",
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "Ok" : "Failed to find all post",
        response,
      });
    } catch (error) {
      reject(new Error("Database query failed: " + error.message));
    }
  });

export const getPostsLimitService = (
  page,
  { limitPost, order, ...query },
  { priceNumber, areaNumber, provinceCode }
) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const queries = { ...query };
      const limit = +limitPost || 5;
      queries.limit = limit;
      if (order) queries.order = [order] || ["createdAt", "DESC"];

      if (priceNumber) {
        query.priceNumber = { [Op.between]: priceNumber };
      }

      if (areaNumber) {
        query.areaNumber = { [Op.between]: areaNumber };
      }

      if (provinceCode) {
        query.address = { [Op.like]: `%${provinceCode}%` };
      }

      const response = await db.Post.findAndCountAll({
        where: query,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
        ...queries,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "zalo", "phone", "avatar"],
          },
          {
            model: db.PostPackage,
            as: "postPackages",
            attributes: ["id", "packageId", "startDay", "endDay", "status"],
            include: [
              {
                model: db.PackageService,
                as: "packageService",
                attributes: ["star"],
              },
            ],
          },
        ],
        attributes: [
          "id",
          "title",
          "address",
          "description",
          "priceNumber",
          "areaNumber",
          "createdAt",
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getNewPostService = async ({ orderBy = "createdAt" } = {}) => {
  try {
    let query = `
        SELECT Posts.*, PackageServices.star, Images.image
        FROM Posts
        JOIN PostPackages ON Posts.id = PostPackages.postId
        JOIN PackageServices ON PostPackages.packageId = PackageServices.id
        LEFT JOIN Images ON Posts.imagesId = Images.id
        ORDER BY PackageServices.star DESC
        LIMIT 10
      `;

    if (orderBy === "createdAt") {
      query = `
          SELECT Posts.*, PackageServices.star, Images.image
          FROM Posts
          JOIN PostPackages ON Posts.id = PostPackages.postId
          JOIN PackageServices ON PostPackages.packageId = PackageServices.id
          LEFT JOIN Images ON Posts.imagesId = Images.id
          ORDER BY Posts.createdAt DESC
          LIMIT 10
        `;
    }

    const response = await db.sequelize.query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      raw: true,
    });

    return {
      err: response.length ? 0 : 1,
      msg: response.length ? "Ok" : "Failed to find all posts",
      response,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const createNewPostService = (body, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const postId = v4();
      const imagesId = v4();
      const labelCode = generateCode(body.label);
      const provinceCode = generateCode(body.province);
      const currentTime = moment().tz("Asia/Ho_Chi_Minh");
      const createdFormatted = currentTime.format("YYYY-MM-DD HH:mm:ss");
      const expiredFormatted = currentTime
        .clone()
        .add(7, "days")
        .format("YYYY-MM-DD HH:mm:ss");

      await db.Post.create({
        id: postId,
        title: body.title || null,
        description: JSON.stringify([body.description]) || null,
        priceNumber: body.priceNumber,
        areaNumber: body.areaNumber,
        areaCode: body.areaCode,
        priceCode: body.priceCode,
        provinceCode: provinceCode,
        address: body.address,
        categoryCode: body.categoryCode,
        userId,
        labelCode,
        imagesId,
      });
      await db.PostPackage.create({
        postId: postId,
        packageId: "1",
        startDay: createdFormatted,
        endDay: expiredFormatted,
        status: true,
      });
      await db.Image.create({
        id: imagesId,
        image: JSON.stringify(body.images),
      });
      await db.Province.findOrCreate({
        where: { value: body?.province },
        defaults: {
          code: provinceCode,
          value: body?.province,
        },
      });
      await db.Label.findOrCreate({
        where: { code: labelCode },
        defaults: {
          code: labelCode,
          value: body?.label,
        },
      });
      resolve({
        err: 0,
        msg: "Ok",
      });
    } catch (error) {
      console.error("Error in createNewPostService:", error);
      reject(error);
    }
  });

export const getPostsLimitUserService = (page, query, id) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;

      const whereConditions = { userId: id };

      if (query.searchString) {
        whereConditions.title = {
          [Op.like]: `%${query.searchString}%`,
        };
      }

      const response = await db.Post.findAndCountAll({
        where: whereConditions,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.PostPackage,
            as: "postPackages",
            attributes: ["id", "packageId", "startDay", "endDay", "status"],
            where: {
              ...(query.packageId ? { packageId: query.packageId } : {}),
              ...(query.status ? { status: query.status === "true" } : {}),
            },
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      console.error("Error in getPostLimitAdminService:", error);
      reject(error);
    }
  });

export const getPostsLimitAdminService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;

      const whereConditions = {};

      if (query.searchString) {
        whereConditions.title = {
          [Op.like]: `%${query.searchString}%`,
        };
      }

      const response = await db.Post.findAndCountAll({
        where: whereConditions,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.PostPackage,
            as: "postPackages",
            attributes: ["id", "packageId", "startDay", "endDay", "status"],
            where: {
              ...(query.packageId ? { packageId: query.packageId } : {}),
              ...(query.status ? { status: query.status === "true" } : {}),
            },
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      console.error("Error in getPostLimitAdminService:", error);
      reject(error);
    }
  });

export const updatePostService = ({ postId, imagesId, ...body }) =>
  new Promise(async (resolve, reject) => {
    try {
      const labelCode = generateCode(body.label);
      const provinceCode = generateCode(body.province);
      await db.Post.update(
        {
          id: postId,
          title: body.title || null,
          description: JSON.stringify([body.description]) || null,
          priceNumber: body.priceNumber,
          areaNumber: body.areaNumber,
          areaCode: body.areaCode,
          priceCode: body.priceCode,
          provinceCode: provinceCode,
          address: body.address,
          categoryCode: body.categoryCode,
          userId: body.userId,
          labelCode,
        },
        {
          where: { id: postId },
        }
      );
      // await db.PostPackage.update({
      //   postId: postId,
      //   packageId: "1",
      //   startDay: createdFormatted,
      //   endDay: expiredFormatted,
      //   status: true,
      // });
      await db.Image.update(
        {
          image: JSON.stringify(body.images),
        },
        {
          where: { id: imagesId },
        }
      );
      await db.Province.findOrCreate({
        where: { value: body?.province },
        defaults: {
          code: provinceCode,
          value: body?.province,
        },
      });
      await db.Label.findOrCreate({
        where: { code: labelCode },
        defaults: {
          code: labelCode,
          value: body?.label,
        },
      });
      resolve({
        err: 0,
        msg: "Updated",
      });
    } catch (error) {
      console.error("Error in updatePostService:", error);
      reject(error);
    }
  });

export const deletePostService = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.destroy({
        where: { id: postId },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        msg: response > 0 ? "Deleted" : "No post deleted successfully",
      });
    } catch (error) {
      console.error("Error in updatePostService:", error);
      reject(error);
    }
  });
