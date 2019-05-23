import {ADD_ITEM,CHANGE_INPUT_VALUE,DEL_ITEM,GET_DATE} from './actionTypes'
import axios from "axios";
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
export  const  get_gank=(data)=>({
    type:GET_DATE,
    data
})

// export  const  getTodolist=()=>{
//     //返回了函数,在获取到结果之后在进行action提交,store只能接收对象，在请求到结果之后，进行数据的发送
//     //自动调用 dispath
//     return (dispath)=>{
//         axios.get("http://gank.io/api/data/福利/10/1")
//             .then((result) => {
//                 //获取到数据，就要发送action ，让store下的reducer记录co
//                // const  action=get_gank(result.data.results)
//                 // store.dispatch(action)
//                 console.log(result)
//                 const  action=get_gank(result.data.results)
//                 dispath(action)
//             }).catch((e) => {
//
//         })
//     }
// }