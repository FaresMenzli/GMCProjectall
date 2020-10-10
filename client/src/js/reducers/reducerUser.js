import {LOGIN} from '../constants/actionsType'

export const reducerUser = (state={},action) =>{
    switch(action.type){
     case LOGIN : 
     return {...state, token : action.payload.token , user : action.payload.user, msg : action.payload.msg}
     default: 
     return state


    }
}