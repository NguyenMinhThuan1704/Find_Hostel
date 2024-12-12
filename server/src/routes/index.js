import authRouter from "./auth";
import insertRouter from "./insert";
import categoryRouter from "./categories";
import postRouter from "./post";
import priceRouter from "./price";
import areaRouter from "./area";
import userRouter from "./user";
import contactRouter from "./contact";
import packageRouter from "./package";
import provinceRouter from "./province";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/categories", categoryRouter);
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/price", priceRouter);
  app.use("/api/v1/area", areaRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/contact", contactRouter);
  app.use("/api/v1/package", packageRouter);
  app.use("/api/v1/province", provinceRouter);

  return app.use("/", (req, res) => {
    console.log("server onl");
  });
};

export default initRoutes;
