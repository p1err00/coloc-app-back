const mysql = require('mysql');
const dbConfig = require('../config/db.config');

//Creation connexion to db
const connexion = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connexion.connect(error => {
    if (error) throw error;
  });

  module.exports = connexion;