const path = require("path");
const express = require("express");
const puppeteer = require("puppeteer")

const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.json())

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get("/", (req, res) =>{
  res.send("hola")
})

app.post("/", async (req, res) => {
console.log("clicado")
})

/*  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await browser.close(); */

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});