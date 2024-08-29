import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
require("dotenv").config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone: body.phone },
        defaults: {
          name: body.name,
          phone: body.phone,
          password: hashPassword(body.password),
          email: body.email,
          roleId: body.roleId,
        },
      });
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        msg: token
          ? "Register is successfully!"
          : "Phone is already registered",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const loginService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone: body.phone },
        raw: true,
      });
      const isCurrentPassword =
        response && bcrypt.compareSync(body.password, response.password);
      const token =
        isCurrentPassword &&
        jwt.sign(
          { id: response.id, phone: response.phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        msg: token
          ? "Login is successfully!"
          : response
          ? "Password is wrong!"
          : "Phone is not found!",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });