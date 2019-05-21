import {createStore} from 'redux'
import reducer from './reducer' //笔记本
const  store=createStore(
     reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//创建图书管理员

export default store;