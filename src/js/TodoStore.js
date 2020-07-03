import { observable, autorun, computed } from "mobx"

class TodoStore {
  @observable todos = ["buy eggs", "buy milk"]
  @observable filter = ""
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.todos.filter((todo) => !this.filter || matchesFilter.test(todo))
  }
}

var store = (window.store = new TodoStore())

export default store
