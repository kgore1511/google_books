const router = require("express").Router();
const userController = require("../controllers/userController");
router.post("/googlelogin", userController.login);
module.exports = router;