import  React ,{Component} from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import store from '../store/store'

import {add_item, getInputChangAction,del_item,get_gank} from '../store/actionCreaters'
import {TodoListUI} from "./Todo_UI";
import axios from 'axios'
export  default  class  ToDo_Antd extends  Component{
 constructor(props){
     super(props)
     //把仓库中的state获取赋值
     this.state=store.getState()
     this.handValue=this.handValue.bind(this)
     this.changStoreValue=this.changStoreValue.bind(this)
     //监听store变化
     this.handleSubmit=this.handleSubmit.bind(this)
     this.handle_del=this.handle_del.bind(this)
    // this.get_json=this.get_json.bind(this)
     store.subscribe(this.changStoreValue)
 }
 componentDidMount() {

     axios.get("http://gank.io/api/data/福利/10/1")
         .then((result) => {
             //获取到数据，就要发送action ，让store下的reducer记录co
             const  action=get_gank(result.data.results)
             console.log(action)
             store.dispatch(action)
         }).catch((e) => {


     })

     // const aticon=getTodolist();
     // store.dispatch(aticon)

 }
    render() {
        return <TodoListUI input_value={this.state.input_value} handleSubmit={this.handleSubmit}
                        handValue={this.handValue}       list={this.state.list}  handle_del={this.handle_del}/>
    }
    handValue(e){
      const  action=getInputChangAction(e.target.value)
      //store自动传递给reducer,reducer中就能接受到
      store.dispatch(action)
    }
    changStoreValue(){
      //整体监听store的变化
      this.setState(store.getState())
    }
    handleSubmit(){
        const  action=add_item()
        store.dispatch(action)
    }
    handle_del(index){
        const  action=del_item(index)
        store.dispatch(action)

    }
    // get_json(data){
    //  const  action=get_gank(data)
    //     store.dispatch(action)
    // }
}