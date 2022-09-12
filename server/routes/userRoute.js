const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  formSubmit,
  getForm
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/submitForm", protect, formSubmit);
router.get("/getForm", protect, getForm);

module.exports = router;
