import React  from 'react'
import {Button, Input, List} from "antd/lib/index";

//相当于函数，无状态，没有生命周期函数，效果更好
 export  const  TodoListUI=(props)=>{
    return (<div style={{marginTop:30}}>
        <Input onChange={props.handValue} placeholder="请输入" value={props.input_value} style={{width:300,marginLeft:32,marginRight:32}}/>
        <Button onClick={props.handleSubmit} type={"primary"}>添加</Button>

        <List
            style={{marginTop:30,marginLeft:32,width:400}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => <img alt={"什么都没有"} style={{width:300,height:400}} src={item.url}  onClick={()=>{props.handle_del(index)}}/>}
        />
    </div>);
}

// export  default  class Todo_UI extends  Component{
//
//     render() {
//         return (<div style={{marginTop:30}}>
//             <Input onChange={this.props.handValue} placeholder="请输入" value={this.props.input_value} style={{width:300,marginLeft:32,marginRight:32}}/>
//             <Button onClick={this.props.handleSubmit} type={"primary"}>添加</Button>
//             <List
//                 style={{marginTop:30,marginLeft:32,width:400}}
//                 header={<div>Header</div>}
//                 footer={<div>Footer</div>}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => <List.Item onClick={(index)=>{this.props.handle_del(index)}}>{item}</List.Item>}
//             />
//         </div>);
//     }
//
// }