import db from "../models";
import generateCode from "../utils/generateCode";
const { Op } = require("sequelize");

// GET ALL AREA
export const getAreasService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Area.findAll({
        raw: true,
        attributes: ["code", "value", "order"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get areas.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAreasLimitAdminService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;

      const whereConditions = {};

      if (query.searchString) {
        whereConditions[Op.or] = [
          { order: { [Op.like]: `%${query.searchString}%` } },
          { code: { [Op.like]: `%${query.searchString}%` } },
          { value: { [Op.like]: `%${query.searchString}%` } },
        ];
      }

      const response = await db.Area.findAndCountAll({
        where: whereConditions,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
        order: [["order", "ASC"]],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting Areas is failed.",
        response,
      });
    } catch (error) {
      console.error("Error in getAreasLimitAdminService:", error);
      reject(error);
    }
  });

export const createAreasService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Area.findOrCreate({
        where: { value: body.value, order: body.order },
        defaults: {
          order: body.order,
          code: generateCode(body.value),
          value: body.value,
        },
      });

      resolve({
        err: 0,
        msg: "AreasService created successfully",
      });
    } catch (error) {
      console.error("Error in createAreasService:", error);
      reject(error);
    }
  });

export const updateAreasService = ({ id, ...body }) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Area.update(
        {
          order: body.order,
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
      console.error("Error in updateAreasService:", error);
      reject(error);
    }
  });

export const deleteAreasService = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Area.destroy({
        where: { id: id },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        msg: response > 0 ? "Deleted" : "No cate deleted successfully",
      });
    } catch (error) {
      console.error("Error in deleteAreasService:", error);
      reject(error);
    }
  });
