import store from "../store.js";
import Todo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/preston/todos/",
  timeout: 8000
});

class TodoService {

  toggleTags(){

  }
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
      .then(res => {
        console.log(res)
        let newTodos = res.data.data.map(todo => new Todo(todo))
        store.commit('todos', newTodos)
      })
      .catch(err => console.error(err)
      )
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      .then(res => {
        let newTodo = new Todo(res.data.data)
        store.commit('todos', [newTodo, ...store.State.todos])
      })
      .catch(err => console.error(err))
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  // toggleTodoStatusAsync(todoId) {
  //   let todo = store.State.todos.find(todo => todo._id == todoId);
  //   //TODO Make sure that you found a todo,
  //   //		and if you did find one
  //   //		change its completed status to whatever it is not (ex: false => true or true => false)

  //   todoApi.put(todoId, todo);
  //   //TODO do you care about this data? or should you go get something else?
  // }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    todoApi.delete(todoId)
      .then(res => {
        this.getTodos()
      })
      .catch(err => {
        console.error(err)
      })
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
