import React,{Component} from 'react'
import store from '../todo_react_redux/store'
import  {connect} from 'react-redux'
import {CHANGE_INPUT_VALUE} from "../store/actionTypes";
import {List} from "antd";
 class  TODO extends Component{
    constructor(props){
        super(props)
        this.changStoreValue=this.changStoreValue.bind(this)
        store.subscribe(this.changStoreValue)
    }
    render() {
        return (
            <div>
                <input onChange={this.props.changeInputValue} value={this.props.data}/>
                <button >提交</button>
                <List
                    style={{marginTop:30,marginLeft:32,width:400}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }

     changStoreValue(){
         //整体监听store的变化
         this.setState(store.getState())
     }

}
const  mapStateToProps=(state)=>{
    return{
        data:state.input_value,
        list:state.list,
    }
}
//store.dispatch  挂载到 props
const  mapDispacthToProps=(dispatch)=>{
    return{
        changeInputValue(e){
           const action ={
               type:CHANGE_INPUT_VALUE,
               value:e.target.value
           }
           dispatch(action)
        }
    }

}
//让TODO跟store做连接，规则就按mapstateProps，映射
export  default connect(mapStateToProps,mapDispacthToProps)(TODO)