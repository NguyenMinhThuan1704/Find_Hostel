import * as PackageService from "../services/package";

export const getAllPackage = async (req, res) => {
  try {
    const response = await PackageService.getAllPackageService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to get all Package controller" + error,
    });
  }
};

export const getPackageLimitAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const id = req.user.id;

  try {
    if (!id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await PackageService.getPackageLimitAdminService(
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

export const createPackage = async (req, res) => {
  try {
    const { name, description, price, star, duration } = req.body;
    const { id } = req.user;
    if (!name || !description || !price || !star || !duration || !id)
      return res.status(404).json({
        err: 1,
        msg: "Missing inputs!",
      });
    const response = await PackageService.createPackageService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to Package controller" + error,
    });
  }
};

export const updatePackage = async (req, res) => {
  const { id } = req.body;
  const uid = req.user.id;

  try {
    if (!id || !uid)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await PackageService.updatePackageService(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at update cate controller: " + error,
    });
  }
};

export const deletePackage = async (req, res) => {
  const { id } = req.query;
  const uid = req.user.id;

  try {
    if (!uid || !id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await PackageService.deletePackageService(id);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at cate controller: " + error,
    });
  }
};
