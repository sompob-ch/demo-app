const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 8080;

const database = require("./database/connection");
database.openConnection();

const UserController = require("./feature/user/controller");

app.use(express.json()); // for parsing application/json

app.use('/user', UserController);
// app.use('/order', OrderController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
