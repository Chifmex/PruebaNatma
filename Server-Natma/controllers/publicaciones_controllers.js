const Publicacion = require("../models/publicaciones_models");

exports.getPublicaciones = async (req, res) => {
    Publicacion.findAll().then((publicaciones) => {
      res.json(publicaciones);
    });
  };