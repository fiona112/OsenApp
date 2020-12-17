"use strict";

const login = require("./login");
const register = require("./register");

module.exports = async function (fastify, opts) {
  fastify.post("/login", login);
  fastify.post("/register", register);
};
