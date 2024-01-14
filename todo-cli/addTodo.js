var commandArgs = require("minimist")(process.argv.slice(2));
const database = require("./models/index");

const addTodo = async (params) => {
  try {
    await database.Todo.addTask(params);
  } catch (error) {
    console.error(error);
  }
};

const calculateDueDate = (days) => {
  if (!Number.isInteger(days)) {
    throw new Error("Need to pass an integer as days");
  }
  const today = new Date();
  const oneDay = 60 * 60 * 24 * 1000;
  return new Date(today.getTime() + days * oneDay);
};

(async () => {
  const { title, dueInDays } = commandArgs;
  if (!title || dueInDays === undefined) {
    throw new Error(
      'title and dueInDays are required. \nSample command: node addTodo.js --title="Buy milk" --dueInDays=-2 ',
    );
  }
  await addTodo({ title, dueDate: calculateDueDate(dueInDays), completed: false });
  await database.Todo.showList();
})();

