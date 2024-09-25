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

export const getPostsLimit = async (req, res) => {
  const { page, priceNumber, areaNumber, provinceCode, ...query } = req.query;

  try {
    const response = await PostService.getPostsLimitService(page, query, {
      priceNumber,
      areaNumber,
      provinceCode,
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const getNewPost = async (req, res) => {
  try {
    const response = await PostService.getNewPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to get all post controller" + error,
    });
  }
};
