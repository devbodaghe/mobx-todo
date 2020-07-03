import { observable, autorun } from "mobx";

class TodoStore {
  @observable todos = ["buy eggs", "buy milk"];
  @observable filter = "";
}

var store = (window.store = new TodoStore());

export default store;
