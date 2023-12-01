import express from "express";
// const express = require("express");
import cors from "cors";
// const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors()); // 모든 요청에도 응답을 해주겠다.

app.get("/", (req, res) => {
  res.json({ greeting: "Hello World!" });
});

// GET : params(:변수명), query(?키=밸류&q=soyeon&name=kong)
// POST : params, body
app.get("/sound/:name", (req, res) => {
  // const q2 = req.query;
  // console.log(q2);
  // res.json({ userid: q2.id });
  // const q1 = req.params;
  // res.send(`Hello ${q1.id}!`);
  const { name } = req.params;

  if (name == "dog") {
    res.json({ sound: "멍멍", src: "https://ibb.co/nRT27YS" });
  } else if (name == "cat") {
    res.json({ sound: "야옹", src: "https://ibb.co/Xtsjgzp" });
  } else if (name == "pig") {
    res.json({ sound: "꿀꿀", src: "https://ibb.co/16LWnyP" });
  } else {
    res.json({ sound: "....", src: "https://ibb.co/3dzc0mm" });
  }
});

app.get("/cats", (req, res) => {
  res.send("<h1>Meow!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});