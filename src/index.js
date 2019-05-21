import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './ToDo_Antd';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todo />, document.getElementById('root'));
serviceWorker.unregister();
