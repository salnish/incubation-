const express = require("express");
const router = express.Router();
const { getAllApp , viewApplication ,updateStatus ,allSlots ,approvedForms ,slotBook, adminLogin, allUsers} = require("../controllers/adminController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.post("/",adminLogin);
router.get("/getUsers",protectAdmin,allUsers);
router.get("/getAppData",protectAdmin,getAllApp);
router.get("/approvedForms",protectAdmin,approvedForms)
router.put("/updateStatus",protectAdmin,updateStatus);
router.get("/allSlots",protectAdmin,allSlots);
router.get("/viewApplication/:id",protectAdmin,viewApplication);
router.put("/slotBook",protectAdmin,slotBook)

module.exports = router;
