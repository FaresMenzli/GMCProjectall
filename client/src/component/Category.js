
import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {getproduits} from "../js/actions/actionsProduit" 
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react" 
import ProductCardcat from "./ProductCardcat"



const Category = ({match}) => {
  const dispatch = useDispatch() ;
    //3 59:18
    const produits =useSelector((state)=> state.reducerProduit.products)
  useEffect(() => {
    dispatch(getproduits());
   
  }, []) 
  const affichecategory = (cat)=>{
    const result = produits.filter(e => e.Category == cat);
    return result
  }

    return (
     
        <div className="">
          {console.log(match.url)}
            <h2 className="text-center"></h2>
           < BrowserRouter>
              <ul className="  nav navbar justify-content-around  " style={{marginTop:"-8px" , backgroundColor:"#36C1DC"}}>
    <li><Link to={`${match.url}/pc portable`}><i className="text-light">Pc Portable</i></Link></li>
    <li ><Link to={`${match.url}/Telephone`}><i className="text-light">Telephone</i></Link></li>
    <li><Link to={`${match.url}/Gaming`}><i className="text-light">Gaming</i></Link></li>

  </ul>
  {console.log(produits)}
  
{    <Route  path={`${match.path}/:name`} render= {({match}) =>( <div>  <div><ProductCardcat produits={affichecategory(match.params.name)}></ProductCardcat></div></div>)}/>
}  </BrowserRouter>
  <div className="mainContainer text-light font-weight-bold mb-5"> </div>
  </div>
  
    )
}

export default Category
