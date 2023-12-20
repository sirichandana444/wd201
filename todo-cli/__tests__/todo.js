/* eslint-disable space-in-parens */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue,
    dueToday,
    dueLater } = todoList();
const tooday = new Date(); 
const oneDaaaay = 60 * 60 * 24 * 1000;
describe("todoList", () => {
  beforeAll(() => {
    const tooday = new Date();
     //referred to discord forum for this line of code
    add({
      title: "todos",
      completed: false,
      dueDate: new Date(tooday.getTime() - 1 * oneDaaaay).toLocaleDateString(
        "en-CA",
      ),
    });
    add({
      title: "todos2",
      completed: false,
      dueDate: new Date(tooday.getTime() + 1 * oneDaaaay).toLocaleDateString(
        "en-CA",
      ),
    });
    add({
      title: "todos3",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "todos",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("checks return a list of overdue todos", () => {
    const overDueTodoItemsCount =overdue().length;
    add({
        title: "todos",
        completed: false,
        dueDate: new Date(tooday.getTime() - 1 * oneDaaaay).toLocaleDateString(
          "en-CA",
        ),
      });
    expect(overdue().length).toEqual(overDueTodoItemsCount+1) 
  });
  test("checks return a list of todos due today", () => {
    const duetodayTodoItemsCount =dueToday().length;
    add({
        title: "todos3",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      });
    expect(dueToday().length).toEqual(duetodayTodoItemsCount+1) ;
  });
  test("checks return a list of todos due later", () => {
    const dueLaterTodoItemsCount =dueLater().length;
    add({
        title: "todos2",
        completed: false,
        dueDate: new Date(tooday.getTime() + 2 * oneDaaaay)
        .toISOString()
        .slice(0, 10),
      });
    expect(dueLater().length).toEqual(dueLaterTodoItemsCount+1);
  });
});
