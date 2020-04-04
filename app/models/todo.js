
export default class Todo {

  constructor(data) {
    this.task = data.task
    this.id = data.id || ''
    this.complete = false
  }

  get template() {
    return /*html*/ `
    <li class="list-group-item text-light bg-dark">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="completed-${this.id}">
        <label class="custom-control-label" for="completed-${this.id}">Task</label>
        <button type="button" class="close text-danger">
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