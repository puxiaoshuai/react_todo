import React ,{Component} from 'react'
//父组件向子组件传值
//子组件向父组件传值，，，，要调用父组件传递过来的方法

export  default  class TodoItem extends Component{
    reduce(){
        console.log(this.props.store)
      this.props.delect(this.props.store)
    }
    constructor(props){
        super(props)

        this.state={
            index:this.props.store,
            content:this.props.content
        }
    }
    render() {
        return(
            <li onClick={this.reduce.bind(this)} key={this.props.store} >{this.state.content}</li>
        )
    }
}