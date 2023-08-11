const express = require("express");
const authentications = require("../middleware/auth");

const { updatePassword } = require("../controllers/users");

const routes = express.Router();

routes.route("/password/:id").patch(authentications, updatePassword);

module.exports = routes;
