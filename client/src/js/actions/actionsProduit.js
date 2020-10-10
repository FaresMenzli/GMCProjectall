import { GET_PRODUCTS , DELETE_PRODUCT,EDIT_PRODUCT} from "../constants/actionsType"
import axios from "axios" ;




export const getproduits = ()=>(dispatch)=> {
    axios
    .get ("/api/produits")
    .then(res=> dispatch({type: GET_PRODUCTS, payload : res.data}))
    .catch((err)=> console.log(err))


}

export const addProduit =(newProduit)=>(dispatch)=>{
    axios
        .post("/api/produits", newProduit)
        .then ((res)=>dispatch(getproduits()))
        .catch ((err)=>console.log(err))
}
//// action delete
export const deleteproduits = (id) => (dispatch)=>{
    axios
    .delete(`api/produits/${id}`)
    .then(() =>dispatch(getproduits))
    .catch(err=>console.log(err))
}
////action edit 
export const editproduit = (id,Name,Prix,Description) => (dispatch) =>{
axios
   .put(`api/produits/${id}`,{Name,Prix,Description})
   .then(()=>dispatch(getproduits()))
   
}