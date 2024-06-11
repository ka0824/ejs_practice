const express = require("express");
const app = express();
const port = 3000;

// EJS를 뷰 엔진으로 설정
app.set("view engine", "ejs");

// 루트 라우트 설정
app.get("/", (req, res) => {
  const data = { title: "EJS Example", message: "Hello, EJS!", test: "abc" };
  res.render("index", data);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
