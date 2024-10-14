import db from "../models";
const { Op, where } = require("sequelize");
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
  query,
  { priceNumber, areaNumber, provinceCode }
) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const queries = { ...query };

      if (priceNumber) {
        queries.priceNumber = { [Op.between]: priceNumber };
      }

      if (areaNumber) {
        queries.areaNumber = { [Op.between]: areaNumber };
      }

      if (provinceCode) {
        queries.address = { [Op.like]: `%${provinceCode}%` };
      }

      const response = await db.Post.findAndCountAll({
        where: queries,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
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
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getNewPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        offset: 0,
        order: [["createdAt", "DESC"]],
        limit: 10,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
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
      reject();
    }
  });

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

export const getPostsLimitAdminService = (page, query, id) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const queries = { ...query, userId: id };

      const response = await db.Post.findAndCountAll({
        where: queries,
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
            attributes: ["packageId", "startDay", "endDay", "status"],
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
