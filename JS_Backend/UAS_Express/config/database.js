const mysql = require('mysql');

require('dotenv').config();

// mendapatkan environment variable dari .env file
const { 
    DB_HOST, 
    DB_USER, 
    DB_PASSWORD, 
    DB_DATABASE }
    = process.env;

// membuat koneksi ke  database
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER   ,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

// konek ke database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database'); 
});

module.exports = connection; 