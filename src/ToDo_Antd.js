import  React ,{Component} from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Input,Button,List} from 'antd'
import store from './store/store'

import {add_item, getInputChangAction,del_item} from './store/actionCreaters'
export  default  class  ToDo_Antd extends  Component{
 constructor(props){
     super(props)
     //把仓库中的state获取赋值
     this.state=store.getState()
     this.handValue=this.handValue.bind(this)
     this.changStoreValue=this.changStoreValue.bind(this)
     //监听store变化
     store.subscribe(this.changStoreValue)
     this.handleSubmit=this.handleSubmit.bind(this)
 }
    render() {
        return <div style={{marginTop:30}}>
            <Input onChange={this.handValue} placeholder="请输入" value={this.state.input_value} style={{width:300,marginLeft:32,marginRight:32}}/>
            <Button onClick={this.handleSubmit} type={"primary"}>添加</Button>
            <List
                style={{marginTop:30,marginLeft:32,width:400}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => <List.Item onClick={this.handle_del.bind(this,index)}>{item}</List.Item>}
            />
        </div>
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
}