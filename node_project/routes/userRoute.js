const express = require("express");
const {registerUser, login, current} = require("../controllers/usercontroller");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

router.post("/register",registerUser)

router.post("/login", login)

router.get("/current", validateToken, current)

module.exports = router;