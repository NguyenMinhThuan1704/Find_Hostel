import * as services from "../services/area";

export const getAreas = async (req, res) => {
  try {
    const response = await services.getAreasService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at area controller: " + error,
    });
  }
};

export const getAreasLimitAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const id = req.user.id;

  try {
    if (!id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.getAreasLimitAdminService(page, query);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at area controller: " + error,
    });
  }
};

export const createAreas = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id)
      return res.status(404).json({
        err: 1,
        msg: "Missing inputs!",
      });
    const response = await services.createAreasService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to Areas controller" + error,
    });
  }
};

export const updateAreas = async (req, res) => {
  const { id } = req.body;
  const uid = req.user.id;

  try {
    if (!id || !uid)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.updateAreasService(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at update area controller: " + error,
    });
  }
};

export const deleteAreas = async (req, res) => {
  const { id } = req.query;
  const uid = req.user.id;

  try {
    if (!uid || !id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.deleteAreasService(id);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at area controller: " + error,
    });
  }
};
