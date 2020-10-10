import {createStore,compose,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { reducerProduit } from "../reducers/reducerProduit"
import { combineReducer } from '../reducers';
const middleWare=[thunk]
// 3eme video 10mn
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
export const store = createStore (combineReducer ,composeEnhancers(applyMiddleware(...middleWare)))