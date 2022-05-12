const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");



router.post("/registerUser", userController.createUser);
router.get("/filterUser", userController.getUser);
module.exports = router;
