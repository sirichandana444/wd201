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
    result += `Title: ${todo.title}, Due Date: ${todo.dueDate}\n`;
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

console.log('Overdue todos:');
console.log(overdueTodos);

console.log('Due today todos:');
console.log(dueTodayTodos);

console.log('Due later todos:');
console.log(toDisplayableList(dueLaterTodos));

