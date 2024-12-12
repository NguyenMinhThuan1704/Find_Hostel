import db from "../models";
const { Op } = require("sequelize");

export const getAllPackageService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.PackageService.findAll({ raw: true });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "Ok" : "Failed to find all Package",
        response,
      });
    } catch (error) {
      reject();
    }
  });

export const getPackageLimitAdminService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;

      const whereConditions = {};

      if (query.searchString) {
        whereConditions[Op.or] = [
          { name: { [Op.like]: `%${query.searchString}%` } },
          { description: { [Op.like]: `%${query.searchString}%` } },
          { price: { [Op.like]: `%${query.searchString}%` } },
          { star: { [Op.like]: `%${query.searchString}%` } },
          { duration: { [Op.like]: `%${query.searchString}%` } },
        ];
      }

      const response = await db.PackageService.findAndCountAll({
        where: whereConditions,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
        order: [["id", "ASC"]],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting package is failed.",
        response,
      });
    } catch (error) {
      console.error("Error in getPackageLimitAdminService:", error);
      reject(error);
    }
  });

export const createPackageService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.PackageService.create({
        name: body.name,
        description: body.description,
        price: body.price,
        star: body.star,
        duration: body.duration,
      });

      resolve({
        err: 0,
        msg: "PackageService created successfully",
      });
    } catch (error) {
      console.error("Error in createPackageService:", error);
      reject(error);
    }
  });

export const updatePackageService = ({ id, ...body }) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.PackageService.update(
        {
          name: body.name,
          description: body.description,
          price: body.price,
          star: body.star,
          duration: body.duration,
        },
        {
          where: { id: id },
        }
      );
      resolve({
        err: 0,
        msg: "Updated",
      });
    } catch (error) {
      console.error("Error in updatePackageService:", error);
      reject(error);
    }
  });

export const deletePackageService = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.PackageService.destroy({
        where: { id: id },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        msg: response > 0 ? "Deleted" : "No cate deleted successfully",
      });
    } catch (error) {
      console.error("Error in deletePackageService:", error);
      reject(error);
    }
  });
