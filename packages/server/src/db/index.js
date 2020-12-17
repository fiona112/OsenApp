const { Client } = require("pg");

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect();

client.query(`
    create table if not exists app_user
    (
        id            integer primary key generated always as identity,
        username      text        not null unique,
        email         text        not null unique,
        display_name  text        not null,
        password_hash text        not null,
        time_joined   timestamptz not null default now()
    );
    create table if not exists refresh_token
    (
        id            integer primary key generated always as identity,
        user_id       integer not null,
        refresh_token text    not null unique,
        foreign key (user_id) references app_user (id) on delete cascade
    );
`);

module.exports = client;
