"use strict";

const bcrypt = require("bcryptjs");
const db = require("~/db");
const checkEmailAvailability = require("~/utils/checkEmailAvailability");
const checkUsernameAvailability = require("~/utils/checkUsernameAvailability");

async function register(request, reply) {
  const { username, password, email } = request.body;
  const displayName = "John Doe";
  const passwordHash = bcrypt.hashSync(password, 10);
  try {
    if (
      (await checkEmailAvailability(email)) &&
      (await checkUsernameAvailability(username))
    ) {
      db.query({
        text: `
          insert into app_user (username, display_name, email, password_hash)
          values ($1, $2, $3, $4);
        `,
        values: [username, displayName, email, passwordHash],
      });
    } else {
      throw new Error("Username or email already exists!");
    }
  } catch (e) {
    console.log(e);
    return { success: false, error: e.message };
  }
  reply.status(201);
  return { success: true };
}

module.exports = register;
