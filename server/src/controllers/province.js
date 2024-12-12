import * as services from "../services/province";

export const getProvincesLimitAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const id = req.user.id;

  try {
    if (!id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.getProvincesLimitAdminService(page, query);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at Province controller: " + error,
    });
  }
};

export const createProvinces = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id)
      return res.status(404).json({
        err: 1,
        msg: "Missing inputs!",
      });
    const response = await services.createProvincesService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to Provinces controller" + error,
    });
  }
};

export const updateProvinces = async (req, res) => {
  const { id } = req.body;
  const uid = req.user.id;

  try {
    if (!id || !uid)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.updateProvincesService(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at update Province controller: " + error,
    });
  }
};

export const deleteProvinces = async (req, res) => {
  const { id } = req.query;
  const uid = req.user.id;

  try {
    if (!uid || !id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.deleteProvincesService(id);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at Province controller: " + error,
    });
  }
};
