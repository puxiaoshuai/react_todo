import {ADD_ITEM,CHANGE_INPUT_VALUE,DEL_ITEM} from './actionTypes'
const defaultState={
    input_value:"",
    list:[]
}
//纯函数。给定固定的输入，就一定会用固定得输出，不会有任何副作用，不能有跟时间等的操作
export  default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE)
    {
        //拷贝，然后赋值，返回
        //注意：reducer可以接受state,但是不能修改state
        const newState=JSON.parse(JSON.stringify(state))
        newState.input_value=action.value
        //返回给了store
        return newState
    }else if(action.type===ADD_ITEM)
    {
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.input_value)
        newState.input_value=""
        console.log(newState)
        return newState

    }
    if(action.type===DEL_ITEM)
    {
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}
//reducer相当于笔记本的记录