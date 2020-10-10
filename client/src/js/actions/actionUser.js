import {LOGIN} from "../constants/actionsType"
import axios from 'axios'

export const loguser = (email,password) => (dispatch) =>{
axios
.post('/api/user/login',{email,password})
.then(res =>dispatch({type:LOGIN , payload:{token:res.data.token,user:res.data.user.name, msg:res.data}}))
.catch(err =>alert(err.response.data.msg))
}