"use strict";

const db = require("~/db");

module.exports = async (username) => {
  const {
    rows: { length },
  } = await db.query({
    text: `
        select id
        from app_user
        where username = $1;
		`,
    values: [username],
  });
  return length === 0;
};
