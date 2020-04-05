// Modules
const express = require("express");
const router = express.Router();
// Controllers
const{getMe,
  updateMe,
  requestMailVerification,
  confirmMail,
  requestPhoneVerification,
  confirmPhone} = require("../../controllers/home/settings-controller")
//---------------------

router.get("/me", getMe);
router.put("/me", updateMe);

router.post("/mail-verification", requestMailVerification);
router.put("/mail-verification", confirmMail);

router.post("/phone-verification", requestPhoneVerification)
router.put("/phone-verification", confirmPhone);

module.exports = router;