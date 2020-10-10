import { GET_PRODUCTS} from "../constants/actionsType"

const initialState = {
    products:[],
        
}

export const reducerProduit = (state = initialState ,action )=>{

    switch(action.type)
    { case GET_PRODUCTS : 
        return {products: action.payload }
        default : return state
    

    }
}


/* 
export const reducerProduit = (state = initialState , action) =>{
    switch(action.type){
        case GET_PRODUCTS : return (products: action.payload)
    default : return state;
    
    }
} */