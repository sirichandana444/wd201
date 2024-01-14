const createTodoList = () => {
  const todos = [];

  const addItem = (todoItem) => {
    todos.push(todoItem);
  };

  const markItemAsComplete = (index) => {
    todos[index].completed = true;
  };

  const getOverdueItems = () => {
    const today = new Date().toISOString().split("T")[0];
    return todos.filter((item) => !item.completed && item.dueDate < today);
  };

  const getDueTodayItems = () => {
    const today = new Date().toISOString().split("T")[0];
    return todos.filter(
      (item) => (item.dueDate === today && !item.completed) || item.completed,
    );
  };

  const getDueLaterItems = () => {
    const today = new Date().toISOString().split("T")[0];
    return todos.filter((item) => !item.completed && item.dueDate > today);
  };

  const formatItemsForDisplay = (list, includeDate) => {
    return list
      .map((item) => {
        const checkbox = `[${item.completed ? "x" : " "}]`;
        const title = item.title;
        const dueDate =
          includeDate && item.dueDate ? ` ${item.dueDate.split("T")[0]}` : "";
        return `${checkbox} ${title}${dueDate}`;
      })
      .join("\n");
  };

  return {
    todos,
    addItem,
    markItemAsComplete,
    getOverdueItems,
    getDueTodayItems,
    getDueLaterItems,
    formatItemsForDisplay,
  };
};

