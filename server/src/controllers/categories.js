import * as CateService from "../services/categories";

export const getAllCategories = async (req, res) => {
  try {
    const response = await CateService.getAllCategoriesService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to get all categories controller" + error,
    });
  }
};

export const getCategoriesLimitAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const id = req.user.id;

  try {
    if (!id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await CateService.getCategoriesLimitAdminService(
      page,
      query
    );

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at cate controller: " + error,
    });
  }
};

export const createCategories = async (req, res) => {
  try {
    const { code, value, header, subheader } = req.body;
    const { id } = req.user;
    if (!code || !value || !header || !subheader || !id)
      return res.status(404).json({
        err: 1,
        msg: "Missing inputs!",
      });
    const response = await CateService.createCategoriesService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to Categories controller" + error,
    });
  }
};

export const updateCategories = async (req, res) => {
  const { id } = req.body;
  const uid = req.user.id;

  try {
    if (!id || !uid)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await CateService.updateCategoriesService(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at update cate controller: " + error,
    });
  }
};
