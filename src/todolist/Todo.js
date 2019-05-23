import React, {Component} from 'react';
import TodoItem from "./TodoItem";

/**
 *
 * 面向数据编程
 * 不用操作dom
 * 要改变state值话，最好整个副本
 * 传递参数的方式 {this.reduce.bind(this,index)}\
 * 代码优化
 * **/
export  default  class Todo extends  Component{

    constructor(props){
        super(props)
        this.state={
            list:[
                'learn react',
                'learn english'
            ],
            value:"我是初始值"
        }
        this.add=this.add.bind(this)

    }
    add(){
        this.setState({
            list:[...this.state.list,this.state.value],
            value:""
        })

    }
    reduce_index(index){
       const  list=[...this.state.list]
        list.splice(index,1)
        this.setState({list})
    }
  render() {
    return (
        <div className="App">
         <input value={this.state.value} onChange={
             (text)=>this.setState({
                 value:text.target.value
             })
         }/>
         <button onClick={this.add}>添加</button>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <TodoItem key={index} delect={this.reduce_index.bind(this)} content={item} index={index}/>
                    })
                }
            </ul>
        </div>
    );
  }
}


