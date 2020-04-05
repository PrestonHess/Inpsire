import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = '';
  store.State.todos.forEach(todo => template += todo.template);
  let todoCount = store.State.todos.length
  document.getElementById('todos').innerHTML = template;
  if (todoCount > 0) { document.getElementById('todo-count').innerText = todoCount.toString() }
  else if (todoCount < 1) { document.getElementById('todo-count').innerText = ""}
}

export default class TodoController {
  constructor() {
    store.subscribe('todos', _drawTodos)
    TodoService.getTodos();
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      description: form.description.value,
    };
    TodoService.addTodoAsync(todo);
    form.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
