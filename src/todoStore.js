import { observable, action } from 'mobx';

class TodoStore {
	@observable
	todos = [];
}

export default new TodoStore();
