const model = require("../models");

const { Todo } = model;

class Todos {
  // membuat sebuah todo baru
  static createTodo(req, res) {
    return Todo.create({ ...req.body })
      .then(todo =>
        res
          .status(201)
          .send({ error: false, message: "Todo successfully created", todo })
      )
      .catch(error =>
        res.status(401).send({ error: true, message: "Todo failed to create" })
      );
  }

  // menghapus todo berdasarkan id
  static deleteTodo(req, res) {
    return Todo.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(todo => {
        if (todo) {
          res
            .status(201)
            .send({ error: false, message: "Todo successfully deleted", todo });
        } else {
          res
            .status(401)
            .send({ error: true, message: "Todo failed to delete" });
        }
      })
      .catch(error =>
        res.status(401).send({ error: true, message: "Todo failed to delete" })
      );
  }

  // update todo berdasarkan id
  static updateTodo(req, res) {
    return Todo.update(
      { ...req.body },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(todo => {
        if (todo[0] != 0) {
          res
            .status(201)
            .send({ error: false, message: "Todo successfully updated", todo });
        } else {
          res
            .status(401)
            .send({ error: true, message: "Todo failed to update" });
        }
      })
      .catch(error =>
        res.status(401).send({ error: true, message: "Todo failed to update" })
      );
  }

  // reads / mendapatkan semua todo
  static getTodos(req, res) {
    return Todo.findAll({})
      .then(todo => {
        res
          .status(201)
          .send({ error: false, message: "Todo successfully readed", todo });
      })
      .catch(error =>
        res.status(401).send({ error: true, message: "Todo failed to read" })
      );
  }

  // reads / mendapatkan todo berdasarkan id
  static getTodo(req, res) {
    return Todo.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(todo => {
        if (todo) {
          res
            .status(201)
            .send({ error: false, message: "Todo successfully readed", todo });
        } else {
          res.status(401).send({ error: true, message: "Todo failed to read" });
        }
      })
      .catch(error =>
        res.status(401).send({ error: true, message: "Todo failed to read" })
      );
  }
}

module.exports = Todos;
