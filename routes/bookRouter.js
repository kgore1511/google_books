const router = require("express").Router();
const auth=require('../middleware/auth')
const bookController = require("../controllers/bookController");
router.post("/findBook",auth, bookController.getBooks);
module.exports = router;