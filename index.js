const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// route
const todoRoutes = require("./server/routes/todo");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// menggunakan route todo
app.use("/api/todos", todoRoutes);

// default route
app.use("/", (req, res) => {
  res.status(201).send({ message: "Hello there!" });
});

// not found
app.use("*", (req, res) => {
  res.status(201).send({ message: "Welcome to our default API!" });
});

app.listen(port, () => console.log(`Listening to port ${port} ...`));
