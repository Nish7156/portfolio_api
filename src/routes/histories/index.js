const { Router } = require("express");
const historyController = require("../../controllers/histories");
const History = require("../../models/History");
const { queryMiddlewares, authMiddlewares } = require("../../middlewares");

const router = Router();

router.get(
  "/",
  authMiddlewares.checkJwt,
  queryMiddlewares.advanceQuery(
    History,
    [{ path: "videoId" }, { path: "userId" }],
    {
      status: "private",
    },
  ),
  historyController.getAllHistory,
);

module.exports = router;
