// db.js

// const mysql = require("mysql");

import mysql from "mysql";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
};

let connection;

function connectToDB() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      
    }
    console.log("Connected to MySQL database");
  });
}

function getConnection() {
  return connection;
}

// module.exports = { connectToDB, getConnection };

export { connectToDB, getConnection };
