"use strict";

const bcrypt = require("bcryptjs");
const db = require("~/db");
const generateRefreshToken = require("~/utils/generateRefreshToken");

async function login(request, reply) {
  const { username, password } = request.body;
  try {
    const {
      rows: [{ id, password_hash: passwordHash }],
    } = await db.query({
      text: `
          select id, password_hash
          from app_user
          where username = $1;
        `,
      values: [username],
    });
    if (await bcrypt.compare(password, passwordHash)) {
      return {
        tokens: {
          accessToken: await reply.jwtSign({ id }),
          refreshToken: await generateRefreshToken(id),
        },
      };
    }
  } catch (e) {
    console.log(e);
  }
  reply.status(401);
  return { error: "Invalid username or password." };
}

module.exports = login;
