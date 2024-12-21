import db from "../models";
import bcrypt from "bcryptjs";
import { v4 } from "uuid";
import chothuematbang from "../../data/chothuematbang.json";
import chothuecanho from "../../data/chothuecanho.json";
import nhachothue from "../../data/nhachothue.json";
import chothuephongtro from "../../data/chothuephongtro.json";
import generateCode from "../utils/generateCode";
import moment from "moment-timezone";
import { dataPrice, dataArea } from "../utils/data";
import { getNumberFromString, getNumberFromStringV2 } from "../utils/common";
import { where } from "sequelize";
require("dotenv").config();
// const dataBody = chothuematbang.body;
const dataBody = [
  {
    body: chothuephongtro.body,
    code: "CTPT",
  },
  {
    body: chothuematbang.body,
    code: "CTMB",
  },
  {
    body: chothuecanho.body,
    code: "CTCH",
  },
  {
    body: nhachothue.body,
    code: "NCT",
  },
];

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const provinceCodes = [];
      const labelCodes = [];
      dataBody.forEach((cate) => {
        cate.body.forEach(async (item) => {
          let postId = v4();
          let labelCode = generateCode(item?.header?.class?.classType).trim();
          labelCodes?.every((item) => item?.code !== labelCode) &&
            labelCodes.push({
              code: labelCode,
              value: item?.header?.class?.classType?.trim(),
            });
          let provinceCode = generateCode(
            item?.header?.address?.split(",")?.slice(-1)[0]
          ).trim();
          provinceCodes?.every((item) => item?.code !== provinceCode) &&
            provinceCodes.push({
              code: provinceCode,
              value: item?.header?.address?.split(",")?.slice(-1)[0].trim(),
            });

          let userId = v4();
          let imagesId = v4();

          let desc = JSON.stringify(item?.mainContent?.content);
          let currentArea = getNumberFromString(
            item?.header?.attributes?.acreage
          );
          let currentPrice = getNumberFromString(
            item?.header?.attributes?.price
          );
          const currentTime = moment().tz("Asia/Ho_Chi_Minh");
          const createdFormatted = currentTime.format("YYYY-MM-DD HH:mm:ss");
          const expiredFormatted = currentTime
            .clone()
            .add(7, "days")
            .format("YYYY-MM-DD HH:mm:ss");
          await db.Post.create({
            id: postId,
            title: item?.header?.title,
            labelCode,
            address: item?.header?.address,
            categoryCode: cate.code,
            description: desc,
            userId,
            imagesId,
            areaCode: dataArea.find(
              (area) => area.max > currentArea && area.min <= currentArea
            )?.code,
            priceCode: dataPrice.find(
              (area) => area.max > currentPrice && area.min <= currentPrice
            )?.code,
            provinceCode,
            priceNumber: getNumberFromStringV2(item?.header?.attributes?.price),
            areaNumber: getNumberFromStringV2(
              item?.header?.attributes?.acreage
            ),
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
            image: JSON.stringify(item?.images),
          });

          await db.User.findOrCreate({
            where: {
              phone: item?.contact?.content.find(
                (i) => i.name === "Điện thoại:"
              )?.content,
            },
            defaults: {
              id: userId,
              name: item?.contact?.content.find((i) => i.name === "Liên hệ:")
                ?.content,
              password: hashPassword("123456"),
              phone: item?.contact?.content.find(
                (i) => i.name === "Điện thoại:"
              )?.content,
              zalo: item?.contact?.content.find((i) => i.name === "Zalo")
                ?.content,
              roleId: 1,
            },
          });
        });
      });
      provinceCodes?.forEach(async (item) => {
        await db.Province.create(item);
      });
      labelCodes?.forEach(async (item) => {
        await db.Label.create(item);
      });

      resolve("Done.");
    } catch (error) {
      reject(error);
    }
  });

// export const insertService = () =>
//   new Promise(async (resolve, reject) => {
//     try {
//       dataBody.forEach(async (item) => {
//         let userId = v4();
//         await db.User.findOrCreate({
//           where: {
//             phone: item?.contact?.content.find((i) => i.name === "Điện thoại:")
//               ?.content,
//           },
//           defaults: {
//             id: userId,
//             name: item?.contact?.content.find((i) => i.name === "Liên hệ:")
//               ?.content,
//             password: hashPassword("123456"),
//             phone: item?.contact?.content.find((i) => i.name === "Điện thoại:")
//               ?.content,
//             zalo: item?.contact?.content.find((i) => i.name === "Zalo")
//               ?.content,
//             roleId: 1,
//           },
//         });
//         resolve("OK");
//       });
//     } catch (err) {
//       reject(err);
//     }
//   });

export const createPricesAndAreas = () =>
  new Promise((resolve, reject) => {
    try {
      dataPrice.forEach(async (item, index) => {
        await db.Price.create({
          code: item.code,
          value: item.value,
          order: index + 1,
        });
      });
      dataArea.forEach(async (item, index) => {
        await db.Area.create({
          code: item.code,
          value: item.value,
          order: index + 1,
        });
      });
      resolve("OK");
    } catch (err) {
      reject(err);
    }
  });
