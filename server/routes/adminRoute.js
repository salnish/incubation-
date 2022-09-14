const express = require("express");
const router = express.Router();
const { getAllApp , viewApplication } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

router.post("/");
router.get("/getUsers");
router.get("/getAppData",getAllApp);
router.put("/updateStatus");
router.get("/allSlots");
router.get("/viewApplication/:id",viewApplication);

module.exports = router;
