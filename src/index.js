import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './todo_react_redux/TODO';
import {Provider } from 'react-redux'
import store from './todo_react_redux/store'
import * as serviceWorker from './serviceWorker';
const App=(
    <Provider store={store}>
        <Todo/>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
serviceWorker.unregister();
