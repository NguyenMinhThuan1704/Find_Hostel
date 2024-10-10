import db from "../models";

// GET Current user
export const getCrrUser = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: {
          exclude: ["password"],
        },
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
