import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer' //笔记本
//浏览器redux调试，s
import  todoSages from '../saga/sagas'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);
const  store=createStore(
     reducer,

   ////创建图书管理员]
)
//sagaMiddleware.run(todoSages)

export default store;