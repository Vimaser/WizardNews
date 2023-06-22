const express = require("express");
const volleyball = require('volleyball');
const morgan = require('morgan');

const app = express();
app.use(volleyball);
app.use(morgan('dev'));

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
