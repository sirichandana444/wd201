const todoList = () => {
  all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate <= today);
  };

  const dueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter(
      (item) => !item.completed && item.dueDate === today
    );
  };

  const dueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter(
      (item) => !item.completed && item.dueDate > today
    );
  };

  const toDisplayableList = (list) => {
    let displayableList = "";
    list.forEach((item) => {
      const checkbox = item.completed ? "[x]" : "[ ]";
      const title = item.title;
      const dueDate = item.dueDate ? ` ${item.dueDate}` : "";
      displayableList += `${checkbox} ${title}${dueDate}\n`;
    });
    return displayableList;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

const todos = todoList();

todos.add({
  title: "Submit assignment",
  dueDate: "2023-12-18",
  completed: false,
});
todos.add({
  title: "Service Vehicle",
  dueDate: "2023-12-18",
  completed: false,
});
todos.add({ title: "File taxes", dueDate: "2023-12-20", completed: false });
todos.add({ title: "Pay electric bill", dueDate: "2023-12-20", completed: false });

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
