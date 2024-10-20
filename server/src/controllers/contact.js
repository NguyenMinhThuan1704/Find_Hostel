import * as ContactService from "../services/contact";

export const createContact = async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.user;
    if (!description || !id)
      return res.status(404).json({
        err: 1,
        msg: "Missing inputs!",
      });
    const response = await ContactService.createContactService(description, id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to contact controller" + error,
    });
  }
};
