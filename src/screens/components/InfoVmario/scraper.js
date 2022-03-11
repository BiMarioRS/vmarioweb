const puppeteer = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");
puppeteer.use(pluginStealth());
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/", async (req, res) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://socialblade.com/youtube/c/bimario/realtime");

  const [el] = await page.$x("//*[@id='rawCount']");
  const txt = await el.getProperty("textContent");
  const subs = await txt.jsonValue();
  console.log({ subs });
  return subs;
});

scrapeProduct("https://socialblade.com/youtube/c/bimario/realtime");
