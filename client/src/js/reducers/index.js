import { combineReducers } from 'redux';
import {reducerPanier} from './reducerPanier';
import {reducerProduit} from './reducerProduit';
import {reducerUser} from './reducerUser'
export const combineReducer = combineReducers({
    reducerPanier,
  reducerProduit,
  reducerUser
});