"use strict";

const { nanoid } = require("nanoid");
const db = require("~/db");

module.exports = async (userId) => {
  const refreshToken = nanoid();
  await db.query({
    text: `
        insert into refresh_token (user_id, refresh_token)
        values ($1, $2);
		`,
    values: [userId, refreshToken],
  });
  return refreshToken;
};
