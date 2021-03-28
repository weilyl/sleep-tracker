const knexfile = require('./knexfile')
require('dotenv').config()
const pg = require('pg-promise')()

const db = pg({
  "host": 'localhost',
  "port": 5432,
  "database": "sleep_tracker",
  "user": 'postgres',
  "password": 'root'
})

module.exports = db;
