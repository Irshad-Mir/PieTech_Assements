const express = require('express');
const router = express.Router();

const PostController = require("../controllers/PostController");
const UserController = require("../controllers/UserController");
router.get("/p", PostController.getPost);
router.get("/u", UserController.getUser);

module.exports = router;
