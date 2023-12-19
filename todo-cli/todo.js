const all = [];

function add(todo) {
 all.push(todo);
}

function overdue() {
 const dateToday = new Date();
 return all.filter(todo => new Date(todo.dueDate) < dateToday);
}

function dueToday() {
 const dateToday = new Date();
 const today = dateToday.toISOString().split("T")[0];
 return all.filter(todo => todo.dueDate === today);
}

function dueLater() {
 const dateToday = new Date();
 return all.filter(todo => new Date(todo.dueDate) > dateToday);
}

function toDisplayableList(laterdues) {
 let result = '';
 laterdues.forEach(todo => {
    result += `[ ] ${todo.title} ${todo.dueDate}\n`;
 });
 return result;
}

add({ title: 'Buy groceries', dueDate: '2022-05-15' });
add({ title: 'File taxes', dueDate: '2022-04-15' });
add({ title: 'Pay electricity bill', dueDate: '2022-03-25' });
add({ title: 'Pick up dry cleaning', dueDate: '2022-04-15' });
add({ title: 'Attend team meeting', dueDate: '2022-05-15' });
add({ title: 'Clean house', dueDate: '2022-06-15' });

const overdueTodos = overdue();
const dueTodayTodos = dueToday();
const dueLaterTodos = dueLater();

console.log('My Todo-list');

console.log('Overdue');
console.log(overdueTodos);

console.log('Due Today');
console.log(dueTodayTodos);

console.log('Due Later');
console.log(toDisplayableList(dueLaterTodos));

