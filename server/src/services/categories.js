import db from "../models";

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
