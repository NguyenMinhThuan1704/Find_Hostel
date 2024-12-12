import * as services from "../services/price";

export const getPrices = async (req, res) => {
  try {
    const response = await services.getPricesService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at price controller: " + error,
    });
  }
};

export const getPricesLimitAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const id = req.user.id;

  try {
    if (!id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.getPricesLimitAdminService(page, query);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at price controller: " + error,
    });
  }
};

export const createPrices = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id)
      return res.status(404).json({
        err: 1,
        msg: "Missing inputs!",
      });
    const response = await services.createPricesService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to Prices controller" + error,
    });
  }
};

export const updatePrices = async (req, res) => {
  const { id } = req.body;
  const uid = req.user.id;

  try {
    if (!id || !uid)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.updatePricesService(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at update price controller: " + error,
    });
  }
};

export const deletePrices = async (req, res) => {
  const { id } = req.query;
  const uid = req.user.id;

  try {
    if (!uid || !id)
      return res.status(400).json({
        err: 1,
        msg: "Missing user ID",
      });
    const response = await services.deletePricesService(id);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at price controller: " + error,
    });
  }
};
