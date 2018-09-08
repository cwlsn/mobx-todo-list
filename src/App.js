import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';

@inject('todoStore')
@observer
class App extends Component {
	render() {
		const { todoStore } = this.props;
		return (
			<div className="App">
				<div className="App-list">
					{todoStore.todos.map((todo) => (
						<div
							className={todo.done ? 'App-todo__done' : 'App-todo'}
							key={todo.id}
						>
							{todo.text}
							<button onClick={todoStore.markDone(todo.id)}>Done</button>
						</div>
					))}
				</div>
				<input
					type="text"
					value={todoStore.newItemInput.value}
					onChange={todoStore.newItemInput.onChange}
				/>
				<button onClick={todoStore.addTodo}>Add</button>
			</div>
		);
	}
}

export default App;
