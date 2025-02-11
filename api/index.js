// NODEJS

//Declare the libraris

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3001;


const dbConfig = {
    host: "localhost",
    user: "in-class-user",
    password: "123456",
    database: "in-class-db",
    port: 3310 // IN MY CASE YOU CAN USE 3306
}
app.use(express.json());

// HTTP VERBS: POST, GET, PUT, PATCH, OPTIONS

// first endpoint
// GET
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is runing" });
});


app.listen(port, () => {
    console.log(`The server is runing, PORT: ${port}`);
})