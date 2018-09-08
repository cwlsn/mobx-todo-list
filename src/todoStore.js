import { observable, action } from 'mobx';

class TodoStore {
	currentId = 0;

	@observable
	todos = [];

	@observable
	newItemInput = {
		value: '',
		onChange: (event) => {
			this.newItemInput.value = event.target.value;
		},
	};

	@action
	markDone = (id) => (event) => {
		const filteredList = this.todos.filter((todo) => todo.id !== id);
		this.todos = filteredList;
	};

	@action
	addTodo = () => {
		this.currentId++;

		this.todos.unshift({
			text: this.newItemInput.value,
			done: false,
			id: this.currentId,
		});
		this.newItemInput.value = '';
	};
}

export default new TodoStore();
