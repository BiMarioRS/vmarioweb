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

let digimonNames = "";

   // Launching the Puppeteer controlled headless browser and navigate to the Digimon website
   puppeteer.launch().then(async function(browser) {
    const page = await browser.newPage();
    await page.goto('http://digidb.io/digimon-list/');

    // Targeting the DOM Nodes that contain the Digimon names
    digimonNames = await page.$$eval('#digiList tbody tr td:nth-child(2) a', function(digimons) {
    // Mapping each Digimon name to an array
        return digimons.map(function(digimon) {
      return digimon.innerText;
    });
  });

    // Log the array of Digimon names to the terminal
    console.log(digimonNames);

    // Closing the Puppeteer controlled headless browser
    await browser.close();
});


app.get("/api/hello", (req, res, next) =>{
  res.send({express: digimonNames})
  next()

})




// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});