import {ADD_ITEM,CHANGE_INPUT_VALUE,DEL_ITEM} from './actionTypes'
export  const  getInputChangAction=(value)=>({
      type:CHANGE_INPUT_VALUE,
      value
})
export  const  add_item=()=>({
    type:ADD_ITEM,
})
export  const  del_item=(index)=>({
    type:DEL_ITEM,
    index
})