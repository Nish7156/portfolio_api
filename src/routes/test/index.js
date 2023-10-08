const { Router } = require("express");

const router = Router();

router.get("/", function (req, res) {
  res.send("This is a get request");
});

module.exports = router;
