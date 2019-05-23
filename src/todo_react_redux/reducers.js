import {CHANGE_INPUT_VALUE} from "../store/actionTypes";

const defaultstate={
    input_value:"你好",
    list:[]
}
export  default  (state=defaultstate,action)=>{
    if(action.type===CHANGE_INPUT_VALUE)
    {
        //拷贝，然后赋值，返回
        //注意：reducer可以接受state,但是不能修改state
        console.log("数据改变")
        const newState=JSON.parse(JSON.stringify(state))
        newState.input_value=action.value
        console.log(action.value)
        //返回给了store
        return newState
    }
    return state

}