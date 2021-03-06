const router = require("express").Router();
const { lines } = require("../../controllers/pairing/lines");
const authentication = require("../../middlewares/authentication");
const { authorizePassenger } = require("../../middlewares/authorization")
const { locStation } = require("../../controllers/pairing/stations");
const { createNewLine } = require("../../controllers/pairing/geoJson");
const { findDriver,
    getDriverInfo,
} = require("../../controllers/pairing/pairing");

router.post("/station", authentication, locStation);
router.get("/line", authentication, lines);
router.post("/find-driver", [authentication, authorizePassenger], findDriver);
router.post("/driver-info", [authentication, authorizePassenger], getDriverInfo)
router.post("/create-line", authentication, createNewLine);

module.exports = router;
