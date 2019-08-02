"use strict";
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          isEmpty: value => {
            if (value.trim().length === 0) {
              throw new Error("Title should not be empty!");
            }
          }
        }
      },
      todo: {
        type: DataTypes.TEXT,
        validate: {
          isEmpty: value => {
            if (value.trim().length === 0) {
              throw new Error("Todo should not be empty!");
            }
          }
        }
      },
      author: {
        type: DataTypes.STRING,
        validate: {
          isEmpty: value => {
            if (value.trim().length === 0) {
              throw new Error("Author should not be empty!");
            }
          }
        }
      }
    },
    {}
  );
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};
