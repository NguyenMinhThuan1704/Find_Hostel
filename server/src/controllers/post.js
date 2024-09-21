import * as PostService from "../services/post";

export const getPost = async (req, res) => {
  try {
    const response = await PostService.getPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to get all post controller" + error,
    });
  }
};

export const getPostLimit = async (req, res) => {
  const { page, ...query } = req.query;

  try {
    const response = await PostService.getPostLimitService(page, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to get all post controller" + error,
    });
  }
};
