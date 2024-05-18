const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(__dirname + "/views/home.html");
});
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});
