import * as services from "../services/user";

export const getCrrUser = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getCrrUser(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
