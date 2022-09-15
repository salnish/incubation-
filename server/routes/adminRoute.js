const express = require("express");
const router = express.Router();
const { getAllApp , viewApplication ,updateStatus ,allSlots ,approvedForms ,slotBook} = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

router.post("/");
router.get("/getUsers");
router.get("/getAppData",getAllApp);
router.get("/approvedForms",approvedForms)
router.put("/updateStatus",updateStatus);
router.get("/allSlots",allSlots);
router.get("/viewApplication/:id",viewApplication);
router.put("/slotBook",slotBook)

module.exports = router;
