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

let subs = "";

   // Launching the Puppeteer controlled headless browser and navigate to the subs website
   puppeteer.launch().then(async function(browser) {
    const page = await browser.newPage();
    await page.goto('https://socialcounts.org/youtube-live-subscriber-count/UC106ODNmI-M5BDMx5_2yNMQ');


    // Targeting the DOM Nodes that contain the subs names
    subs = await page.$$eval('#count_value', function(subss) {
    // Mapping each subs name to an array
        return subss.map(function(subs) {
      return subs.innerText;
    });
  });

    // Log the array of subs names to the terminal
    console.log(subs);

    // Closing the Puppeteer controlled headless browser
    await browser.close();
});


app.get("/api/hello", (req, res, next) =>{
  res.send({express: subs[0]})
  next()

})




// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});