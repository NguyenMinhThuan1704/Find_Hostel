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

export const createNewPost = async (req, res) => {
  try {
    const { categoryCode, title, priceNumber, areaNumber, label } = req.body;
    const { id } = req.user;
    if (!categoryCode || !id || !title || !priceNumber || !areaNumber || !label)
      return res.status(404).json({
        err: 1,
        msg: "Missing inputs!",
      });
    const response = await PostService.createNewPostService(req.body, id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to post controller" + error,
    });
  }
};

export const getPostsLimitAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const id = req.user.id;

  try {
    if (!id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await PostService.getPostsLimitAdminService(
      page,
      query,
      id
    );

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post1 controller: " + error,
    });
  }
};

export const updatePost = async (req, res) => {
  const { postId, imagesId, postPackagesId } = req.body;
  const id = req.user.id;

  try {
    if (!postId || !id || !imagesId || !postPackagesId)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await PostService.updatePostService(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const deletePost = async (req, res) => {
  const { postId } = req.query;
  const id = req.user.id;

  try {
    if (!postId || !id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await PostService.deletePostService(postId);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const searchPostsLimitAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const id = req.user.id;

  try {
    if (!id) {
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    }

    const response = await PostService.searchPostsLimitAdminService(
      page,
      query,
      id
    );

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to search posts for admin: " + error,
    });
  }
};
