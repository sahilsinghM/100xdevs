/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo <= this.todos.length - 1) {
      this.todos.splice(indexOfTodo, 1);
    } else return "Invalid index";
  }
  update(index, updatedTodo) {
    if (index >= 0 && index <= this.todos.length - 1) {
      console.log("got into the if statement");
      this.todos[index] = updatedTodo;
      // return this.todos[index];
    } else return `Invalid Task`;
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo <= this.todos.length - 1) {
      return this.todos[indexOfTodo];
    } else return null;
  }
  clear() {
    this.todos = [];
  }
}

let todoList = new Todo();
todoList.add("Task 1");
todoList.add("Task 2");
todoList.add("Task 3");

todoList.update(1, "Updated Task 2");
console.log(todoList);

module.exports = Todo;
