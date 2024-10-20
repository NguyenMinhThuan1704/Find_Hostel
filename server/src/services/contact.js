import db from "../models";

export const createContactService = (description, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Contact.create({
        userId: userId,
        description: description,
      });

      resolve({
        err: 0,
        msg: "Contact created successfully",
      });
    } catch (error) {
      console.error("Error in createContactService:", error);
      reject(error);
    }
  });
