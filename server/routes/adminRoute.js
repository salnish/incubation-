const express = require("express");
const router = express.Router();
const { getAllApp , viewApplication ,updateStatus } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

router.post("/");
router.get("/getUsers");
router.get("/getAppData",getAllApp);
router.put("/updateStatus",updateStatus);
router.get("/allSlots");
router.get("/viewApplication/:id",viewApplication);

module.exports = router;
