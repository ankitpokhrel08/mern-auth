const ensureAuthenticated = require("../Middlewares/Auth");
const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json({
    message: "This is a secret page",
  });
});

module.exports = router;
