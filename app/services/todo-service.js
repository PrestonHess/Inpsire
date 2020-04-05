import store from "../store.js";
import Todo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/preston/todos/",
  timeout: 8000
});

class TodoService {

  // getTodos is a get request from the todoApi once a response comes back
  // it maps through the todos as a new Todo before commiting to the store
  getTodos() {
    todoApi.get()
      .then(res => {
        console.log(res)
        let newTodos = res.data.data.map(todo => new Todo(todo))
        store.commit('todos', newTodos)
      })
      .catch(err => console.error(err)
      )
  }

  // addTodoAsync will create a new todo instance on the api after user submits a todo form
  addTodoAsync(todo) {
    todoApi.post("", todo)
      .then(res => {
        let newTodo = new Todo(res.data.data)
        store.commit('todos', [newTodo, ...store.State.todos])
      })
      .catch(err => console.error(err))
  }

  // Toggle Todo status will change this completed porperty thats set to a boolean
  // this function will also update the store and the todoApi
  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    if (todo) {
      !todo.completed ? todo.completed = true : todo.completed = false;
    }
    todoApi.put(todoId, todo)
      .then(res => {
      })
      .catch(err => {
        console.error(err)
      })
  }

  // Removes the todo which is identify by the todoID and deleted from the Api
  // getTodos is called to update store after receiving a response from the call request
  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
      .then(res => {
        this.getTodos()
      })
      .catch(err => {
        console.error(err)
      })
  }
}

const todoService = new TodoService();
export default todoService;
