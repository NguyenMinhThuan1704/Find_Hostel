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
