import db from "../models";
import generateCode from "../utils/generateCode";
const { Op } = require("sequelize");

export const getProvincesLimitAdminService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;

      const whereConditions = {};

      if (query.searchString) {
        whereConditions[Op.or] = [
          { code: { [Op.like]: `%${query.searchString}%` } },
          { value: { [Op.like]: `%${query.searchString}%` } },
        ];
      }

      const response = await db.Province.findAndCountAll({
        where: whereConditions,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting Provinces is failed.",
        response,
      });
    } catch (error) {
      console.error("Error in getProvincesLimitAdminService:", error);
      reject(error);
    }
  });

export const createProvincesService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const [Province, created] = await db.Province.findOrCreate({
        where: { value: body.value },
        defaults: {
          code: generateCode(body.value),
          value: body.value,
        },
      });

      if (created) {
        resolve({
          err: 0,
          msg: "Province created successfully",
        });
      } else {
        resolve({
          err: 1,
          msg: "Province already exists",
        });
      }
    } catch (error) {
      console.error("Error in createProvincesService:", error);
      reject(error);
    }
  });

export const updateProvincesService = ({ id, ...body }) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Province.update(
        {
          code: generateCode(body.value),
          value: body.value,
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
      console.error("Error in updateProvincesService:", error);
      reject(error);
    }
  });

export const deleteProvincesService = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Province.destroy({
        where: { id: id },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        msg: response > 0 ? "Deleted" : "No cate deleted successfully",
      });
    } catch (error) {
      console.error("Error in deleteProvincesService:", error);
      reject(error);
    }
  });
