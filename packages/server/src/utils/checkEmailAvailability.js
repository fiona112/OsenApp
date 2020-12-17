"use strict";

const db = require("~/db");

module.exports = async (email) => {
  const {
    rows: { length },
  } = await db.query({
    text: `
        select id
        from app_user
        where email = $1;
		`,
    values: [email],
  });
  return length === 0;
};
