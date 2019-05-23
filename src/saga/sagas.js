import {takeEvery,put} from 'redux-saga/effects'
import {GET_DATE} from '../store/actionTypes'
import axios from 'axios'
import {get_gank} from "../store/actionCreaters";
//generator函数
function* get_gank1() {
    const result=yield  axios.get("http://gank.io/api/data/福利/10/1");
    const  action=get_gank(result.data.results)
    yield put(action)
}
function* mySaga() {
    yield takeEvery(GET_DATE,get_gank1)
}

export default mySaga;