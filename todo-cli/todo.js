const todoList = () => {
    const all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter(item => !item.completed && item.dueDate < today);
    };
  
    const dueToday = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter(item => (item.dueDate === today && !item.completed) || item.completed);
    };
  
    const dueLater = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter(item => !item.completed && item.dueDate > today);
    };
  
    const toDisplayableList = (list, includeDate) => {
      return list.map(item => {
        const checkbox = `[${item.completed ? 'x' : ' '}]`;
        const title = item.title;
        const dueDate = includeDate && item.dueDate ? ` ${item.dueDate.split('T')[0]}` : '';
        return `${checkbox} ${title}${dueDate}`;
      }).join('\n');
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
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
  todos.add({ title: 'Pay rent', dueDate: today, completed: true });
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false });
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false });
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });
  
  console.log("My Todo-list\n");
  
  console.log("Overdue");
  var overdues = todos.overdue();
  var formattedOverdues = todos.toDisplayableList(overdues, true);
  console.log(formattedOverdues);
  console.log("\n");
  
  console.log("Due Today");
  let itemsDueToday = todos.dueToday();
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday, false);
  console.log(formattedItemsDueToday);
  console.log("\n");
  
  console.log("Due Later");
  let itemsDueLater = todos.dueLater();
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater, true);
  console.log(formattedItemsDueLater);
  console.log("\n\n");
