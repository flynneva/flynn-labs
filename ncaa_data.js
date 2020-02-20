const https = require("https");
const url = "https://data.ncaa.com/casablanca/scoreboard/basketball-men/d1/2020/02/17/scoreboard.json";

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(body);
  });
});
