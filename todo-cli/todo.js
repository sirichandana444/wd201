const todoList = () => {
  // Define todos variable before using it.
  const todos = [];

  const add = (todoItem) => {
    todos.push(todoItem);
  };

  const markAsComplete = (index) => {
    todos[index].completed = true;
  };

  const overdue = () => {
    const overdues = [];
    for (const item of todos) {
      if (item.dueDate < yesterday) {
        overdues.push(item);
      }
    }
    return overdues;
  };

  const dueToday = () => {
    const itemsDueToday = [];
    for (const item of todos) {
      if (item.dueDate === today) {
        itemsDueToday.push(item);
      }
    }
    return itemsDueToday;
  };

  const dueLater = () => {
    const itemsDueLater = [];
    for (const item of todos) {
      if (item.dueDate > today) {
        itemsDueLater.push(item);
      }
    }
    return itemsDueLater;
  };

  const toDisplayableList = (list) => {
    let formattedList = "";
    for (const item of list) {
      formattedList += item.completed ? "[x] " : "[ ] ";
      formattedList += item.title;
      if (item.dueDate !== today) {
        formattedList += ` (${formattedDate(item.dueDate)})`;
      }
      formattedList += "\n";
    }
    return formattedList.trim();
  };

  return {
    all: todos,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");

