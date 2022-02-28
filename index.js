const express = require("express");
const app = express();
const userHandler = require("./routeHandler/userHandler");

app.use("/user", userHandler);

app.listen(3333, () => {
  console.log("Server running on port: 3333kjhnkdsfj");
});
