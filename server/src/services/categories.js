import db from "../models";
const { Op } = require("sequelize");

// GET all categories
export const getAllCategoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({ raw: true });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "Ok" : "Failed to find all categories",
        response,
      });
    } catch (error) {
      reject();
    }
  });

export const getCategoriesLimitAdminService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;

      const whereConditions = {};

      if (query.searchString) {
        whereConditions[Op.or] = [
          { value: { [Op.like]: `%${query.searchString}%` } },
          { header: { [Op.like]: `%${query.searchString}%` } },
          { subheader: { [Op.like]: `%${query.searchString}%` } },
        ];
      }

      const response = await db.Category.findAndCountAll({
        where: whereConditions,
        raw: true,
        nest: true,
        offset: offset * 5 || 0,
        limit: 5,
        order: [["id", "ASC"]],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      console.error("Error in getCategoriesLimitAdminService:", error);
      reject(error);
    }
  });

export const createCategoriesService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Category.create({
        code: body.code,
        value: body.value,
        header: body.header,
        subheader: body.subheader,
      });

      resolve({
        err: 0,
        msg: "Category created successfully",
      });
    } catch (error) {
      console.error("Error in createCategoriesService:", error);
      reject(error);
    }
  });

export const updateCategoriesService = ({ id, ...body }) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Category.update(
        {
          code: body.code,
          value: body.value,
          header: body.header,
          subheader: body.subheader,
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
      console.error("Error in updateCategoriesService:", error);
      reject(error);
    }
  });
