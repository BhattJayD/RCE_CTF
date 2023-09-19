const express = require("express");
const app = express();
const port = 3000;
const child_process = require("child_process");

app.get("/", (req, res) => {
  console.log(req.query.cmd);
  try {
    if (req.query.cmd?.includes("ls")) {
      const child = child_process.exec(req.query.cmd, (e, so, se) => {
        if (e) {
          res.send(e);
        }
        if (so) {
          res.send(so);
        }
        if (se) {
          res.send(se);
        }
      });
    } else {
      res.send("only ls allowd in cmd!!");
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
