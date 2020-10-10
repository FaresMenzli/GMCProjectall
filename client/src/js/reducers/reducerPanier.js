import {ADDCART,DELETE_FROM_CART} from  "../constants/actionsType"


const initialState = {
    panier :[],
        
}

export const reducerPanier = (state = initialState ,action )=>{

    switch(action.type)
    { case ADDCART : 
        return {
            ...state,
            panier: [...state.panier, action.payload.new] }
            case DELETE_FROM_CART:
                return {
                  ...state,
                  panier: state.panier.filter((el) => el._id !== action.payload),
                };
        default : return state
    

    }
}
