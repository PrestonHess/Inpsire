
export default class Todo {

  constructor(data) {
    this.description = data.description
    this._id = data._id
    this.completed = data.completed || false
  }

  get template() {
    return /*html*/ `
    <li class="list-group-item text-light bg-dark">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" ${this.completed ? "checked" : ''} 
        onclick="app.todoController.toggleTodoStatus('${this._id}')" 
        class="custom-control-input"
        id="completed-${this._id}">
        <label class="custom-control-label" for="completed-${this._id}">${this.description}</label>
        <button type="button" class="close text-danger" onclick="app.todoController.removeTodo('${this._id}')">
          <span>&times;</span>
        </button>
      </div>
    </li>
`
  }
}
    // <li class="list-group-item">
    // <div class="custom-control custom-checkbox mr-sm-2">
    //   <input type="checkbox" ${this.complete ? "checked" : ''} onclick="app.listController.toggleTags('${this.id}')" class="custom-control-input" id="completed-${this.id}">
    //   <label class="custom-control-label" for="completed-${this.id}">${this.task}</label>
    //   <button type="button" class="close text-danger" onclick="app.listController.deleteTask('${this.id}')">
    //     <span>&times;</span>
    //   </button>
    // </div>
    // </li>