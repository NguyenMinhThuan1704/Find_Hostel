import db from "../models";
import generateCode from "../utils/generateCode";
const { Op } = require("sequelize");

// GET ALL PRICE
export const getPricesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        raw: true,
        attributes: ["code", "value", "order"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get prices.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPricesLimitAdminService = (page, query) =>
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

      const response = await db.Price.findAndCountAll({
        where: whereConditions,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
        order: [["order", "ASC"]],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting Prices is failed.",
        response,
      });
    } catch (error) {
      console.error("Error in getPricesLimitAdminService:", error);
      reject(error);
    }
  });

export const createPricesService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const [price, created] = await db.Price.findOrCreate({
        where: { value: body.value, order: body.order },
        defaults: {
          order: body.order,
          code: generateCode(body.value),
          value: body.value,
        },
      });

      if (created) {
        resolve({
          err: 0,
          msg: "Price created successfully",
        });
      } else {
        resolve({
          err: 1,
          msg: "Price already exists",
        });
      }
    } catch (error) {
      console.error("Error in createPricesService:", error);
      reject(error);
    }
  });

export const updatePricesService = ({ id, ...body }) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Price.update(
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
      console.error("Error in updatePricesService:", error);
      reject(error);
    }
  });

export const deletePricesService = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.destroy({
        where: { id: id },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        msg: response > 0 ? "Deleted" : "No cate deleted successfully",
      });
    } catch (error) {
      console.error("Error in deletePricesService:", error);
      reject(error);
    }
  });
