let router = require("express").Router();

const publicacionesController = require("../controllers/publicaciones_controllers");

router.get("/", publicacionesController.getPublicaciones);


module.exports = router;