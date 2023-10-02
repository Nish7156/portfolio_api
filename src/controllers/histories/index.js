const { historyService } = require("../../services");

const getAllHistory = async (req, res) => {
  const response = await historyService.getAllHistory(req, res)
  res.send(response);
};
module.exports = { getAllHistory };
