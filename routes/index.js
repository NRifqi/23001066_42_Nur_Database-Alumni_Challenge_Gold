const express = require("express");
const router = express.Router();
const { getAlumni, postAlumni, getByIdAlumni, patchAlumni, delAlumni, getEdit } = require("../controller/alumni");
const getHome = require("../controller/home");
const formAlumni = require("../controller/form");

router.get("/", getHome);

router.get("/alumni", getAlumni);
router.post("/add-alumni", postAlumni);
router.get("/detail-alumni/:id", getByIdAlumni)
router.post("/edit-alumni/:id", patchAlumni)
router.get("/edit-alumni/:id", getEdit)
router.get("/delete-alumni/:id", delAlumni)

router.get("/form", formAlumni)
module.exports = router;
