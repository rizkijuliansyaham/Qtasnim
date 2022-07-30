// var mysql = require('mysql');

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "flutter_test"
// });

// db.connect(function(err){
//     if (err) throw err;
//     console.log("connected!");
// });

// module.exports = db;


// import Sequelize from "sequelize";
import {Sequelize} from "sequelize";

const db = new Sequelize("test_qtasnim", "root", "Rizki_14116151", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-07:00",
});

export default db;
