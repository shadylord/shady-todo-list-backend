const express = require("express");
const router = express.Router();

const Todos = require("../controllers/todo");

// mengembalikan semua todos yang ada di database
router.get("/", Todos.getTodos);

// mengembalikan sebuah todo berdasarkan id
router.get("/:id", Todos.getTodo);

// membuat sebuah todo baru
router.post("/", Todos.createTodo);

// menghapus sebuah todo berdasarkan id
router.delete("/:id", Todos.deleteTodo);

// mengupdate sebuah todo berdasarkan id
router.patch("/:id", Todos.updateTodo);

module.exports = router;
