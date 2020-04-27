const express = require('express');
const routes = express.Router();

const ContentController = require('./Controllers/ContentController');

routes.get("/contents", ContentController.index);
routes.post("/contents", ContentController.store);
routes.put("/contents/:id", ContentController.update);



  module.exports = routes;