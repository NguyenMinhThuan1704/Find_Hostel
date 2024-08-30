import authRouter from "./auth";
import insertRouter from "./insert";
import categoryRouter from "./categories";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/categories", categoryRouter);

  return app.use("/", (req, res) => {
    console.log("server onl");
  });
};

export default initRoutes;
