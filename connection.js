const {Client}  = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "priya123",
    database: "employee"
})

module.exports = client