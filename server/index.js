const path = require("path");
const express = require("express");
const puppeteer = require("puppeteer")

const app = express(); // create express app

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  next()
});

app.get("/api/hello", (req, res, next) =>{

  res.send({express: {data}})
  next()

})


// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});