import React from "react";
import { observer } from "mobx-react";

@observer
class TodoList extends React.Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }
  render() {
    const { todos } = this.props.store;
    const list = todos.map((todo) => <li>{todo}</li>);

    return (
      <div>
        <h1>todos</h1>
        <ul>{list}</ul>
        <input
          className="filter"
          onChange={this.filter.bind(this)}
          placeholder="filter"
        />
      </div>
    );
  }
}

export default TodoList;
