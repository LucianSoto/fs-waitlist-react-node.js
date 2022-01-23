const path = require('path')
require('dotenv').config()
// dotenv - config: config file for dotenv locaiton defaults to root project folder, unless told to do so so here we should have made it go to the server folder to look for the env file.

// just put the env file on the root of the project



const env = process.env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = env

// const { path } = require('express/lib/application');
const { Pool } = require('pg');

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

const pool = new Pool ({
  connectionString: connectionString
  
});

module.exports = { pool }