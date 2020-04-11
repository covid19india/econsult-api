const express = require("express");
const app = express();
const fs = require('fs');

var port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

// Mock API
app.get("/faq", (req, res) => {
  fs.readFile(__dirname +"/faq.json", function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

app.get("/links", (req, res) => {
  fs.readFile(__dirname +"/links.json", function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

app.get("/doctors", (req, res) => {
  fs.readFile(__dirname +"/doctors.json", function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

app.get("/tnc", (req, res) => {
  fs.readFile(__dirname +"/tnc.json", function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});



// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});