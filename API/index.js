// NODEJS

//Declare the libraris

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

// HTTM VERBS: POST, GET, PUT, PARCH, OPTIONS

// first endpoint
// GET
app.get("/", (req, res) => {
    res.status(200).json()
});

app.link(port, () =>{
    console.log('The server is runing, PORT: $(port)');
})