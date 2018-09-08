import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import todoStore from './todoStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider todoStore={todoStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
