import React from 'react'
import ProductCard from "./ProductCard"

const Home = (props) => {
    console.log(props) 
    return (
        <div className="mainContainer">
            {props.produits.map(el =>(
               <ProductCard produits={el} ></ProductCard>  
            ))
            
            }
             </div>
    )
}

export default Home

