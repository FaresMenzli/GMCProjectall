import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"

import {BrowserRouter,Route,Link } from 'react-router-dom'
import Category from "./Category"
import Home from "./Home"
import AddProduct from "./AddProduct"
import Panier from "./Panier"
import Login from './login'
import { addProduit,getproduits } from '../js/actions/actionsProduit'

 const Header = (props) => {
   /* const dispatch = useDispatch() ;
    //3 59:18
    const produits =useSelector((state)=> state.products)
  useEffect(() => {
    dispatch(getproduits());
   
  }, [])  */
  let nbrePanier = (useSelector((state)=> state.reducerPanier.panier).length)


   
   let porduits=props.produits
    return (
        <BrowserRouter>
        <div>
        <ul className="navbar nav justify-content-around  navHeader">
    <li className="btn btn-light "><Link to="/">Home</Link></li>
    <li className="btn btn-light "><Link to="/Category">Category</Link></li>
    <li className="btn btn-light "><Link to="/AddProduct">Ajouter un Produit</Link></li>

    <li className="btn btn-light "><Link to="/Panier"><input type="image" width="30px" src="https://www.icone-png.com/png/13/13364.png"></input><strong className="text-danger">({nbrePanier})</strong></Link></li>

   {/*  <li><Link to="/Product">Product</Link></li>
    <li><Link to="/AdminArena">Admin-Area</Link></li> */}

    </ul>
           {/*  <nav className="navbar navbar-dark bg-dark">
            <Link to="/Category">Category{ <p style={{ color: 'white' }}>Category</p> } </Link>
</nav> */}
{/*h produits prps  */}
    <Route path="/" exact /* component={Home} */  render={() => ( <Home produits={porduits} />)}></Route>
    <Route path="/Category"  component={Category}></Route>
    <Route path="/login"  component={Login}/>
    <Route path="/AddProduct"   render={() => (
          <AddProduct
           // handelChange={handelChange}
           // action={isEdit ? editUser : add}
            produit={props.produit}
           // isEdit={isEdit}
          />
        )}
      />
      <Route path="/Panier" component={Panier}></Route>




    
        </div>
        </BrowserRouter>
    )
}

export default Header
