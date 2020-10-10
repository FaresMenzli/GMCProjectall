import  {ADDCART,DELETE_FROM_CART} from "../constants/actionsType";





export function addtocart(tocart){
    return{
      type: ADDCART,
      payload: {
        new: tocart
      }
    }
  }
  export const deletecart = (id) => ({
    type: DELETE_FROM_CART,
    payload: id,
  });
 /*  export const addcartdb =(cart)=>(dispatch)=>{
    axios
        .post("/api/panier", newProduit)
        .then ((res)=>dispatch(getproduits()))
        .catch ((err)=>console.log(err))
} */