/* eslint-disable no-undef */
// completeTodo.js
var commandArgs = require("minimist")(process.argv.slice(2));
const database = require("./models/index");

const completeTask = async (taskId) => {
  try {
    await database.Todo.markAsComplete(taskId);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  const { id } = commandArgs;
  if (!id) {
    throw new Error("Need to pass an id");
  }
  if (!Number.isInteger(id)) {
    throw new Error("The id needs to be an integer");
  }
  await completeTask(id);
  await database.Todo.showList();
})();
