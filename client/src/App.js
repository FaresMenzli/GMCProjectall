import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Test from "./component/Test"
//import ProductCard from './component/ProductCard';
import useState from "react"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react" 
import {getproduits ,addProduit} from "./js/actions/actionsProduit"  
import ProductCard from './component/ProductCard';
import Header from './component/Header';
import Home from './component/Home'




function App() {
 
   
  /*
const add = () => {
dispatch(addProduit(produit));
reset();
}; */
 
   const dispatch = useDispatch() ;
    //3 59:18
    const produits =useSelector((state)=> state.reducerProduit.products)
  useEffect(() => {
    dispatch(getproduits());
   
  }, []) 
 
  return (
    
    
    
    <div >
       
     <Header  produits={produits}  /* produit={produit} */></Header>
     
     {/* {<Home produits={produits} ></Home> } */}
      
 
    </div>
    
  );
}

export default App;
