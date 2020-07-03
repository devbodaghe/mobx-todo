import React from "react"
import { observer } from "mobx-react"

@observer
class TodoList extends React.Component {
  filter(e) {
    this.props.store.filter = e.target.value
  }

  create(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
    }
  }
  render() {
    const { todos, filter, filteredTodos } = this.props.store
    const list = filteredTodos.map((todo) => <li>{todo}</li>)

    return (
      <div>
        <h1>todos</h1>
        <input
          value={filter}
          className="filter"
          onChange={this.filter.bind(this)}
          placeholder="filter todos"
        />
        <input
          className="create"
          onKeyPress={this.create.bind(this)}
          placeholder="add item"
        />
        <ul>{list}</ul>
      </div>
    )
  }
}

export default TodoList
