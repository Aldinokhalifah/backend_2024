const mysql = require('mysql');

require('dotenv').config();

const {
    DB_HOST,
    DB_USER, 
    DB_PASS,
    DB_DATABASE
} = process.env;

const conection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE
});

conection.connect(  (err) => {
    if(err) {
        console.error('Error connecting to database: ', err.stack);
        return;
    }
    console.log('Connected to database');
});

module.exports = conection;