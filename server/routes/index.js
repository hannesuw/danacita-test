const router = require("express").Router();
const apiController = require("../controllers/apiController");

router.get("/provinces", apiController.provinces);
router.get("/cities/:id", apiController.cities);
router.get("/districts/:id", apiController.districts);
router.get("/subDistricts/:id", apiController.subDisctricts);

module.exports = router;
