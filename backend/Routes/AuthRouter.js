const { signup } = require("../Controllers/AuthController");
const { signupValidation } = require("../Middlewares/AuthValidation");
const { loginValidation } = require("../Middlewares/AuthValidation");
const { login } = require("../Controllers/AuthController");

const router = require("express").Router();


router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

module.exports = router;

