const fs = require("fs");
const { Router } = require("express");
const router = Router();
const { checkAuth, timeStamp } = require("../middlewares/users.middleware");
const { createUser, 
  getAllUsers, 
  getUser
} = require("../controller/users.controller")

// get all users

router.get("/", checkAuth, getAllUsers);

// get user by id
router.get("/:id", checkAuth, getUser);

// add new user
router.post("/", timeStamp, createUser);

module.exports = router;
