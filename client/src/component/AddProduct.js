 import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {useEffect,useState} from "react" 
import {getproduits ,addProduit} from "../js/actions/actionsProduit"  




const AddProduct = (/* { handelChange, action, produit, isEdit } */) => {
  
  
     const [produit, setProduit] = useState({
    Name: "",
    Category: "",
    Prix: "",
    Description: "",
    Photo: "",
  });  
    const dispatch = useDispatch() ;
    //3 59:18
    const produits =useSelector((state)=> state.products)
  useEffect(() => {
    dispatch(getproduits());})
     const handelChange = (e) => {
    setProduit({ ...produit, [e.target.name]: e.target.value });
    console.log(produit)
  };
   const reset = () => {
setProduit({
  Name: "",
Category: "",
Prix: "",
Description: "",
Photo:"",
});
};

  const add = () => {
      console.log(produit)
    
    dispatch(addProduit(produit));
    reset();
    //alert.success("");
    alert("Produit ajouté");
  };
  return (
   
    <div >
      <h2 className="card-title-add text-center mt-5 mb-5">
      Ajout d'un produit
      </h2>
<div className="container d-flex flex-column inputgroup">
      <input className="ajoutProduit"
        name="Name"
        type="text"
       
        placeholder="Name..."
        onChange={handelChange}
         value={produit.Name} 
      />

     {/*  <input className="ajoutProduit"
        name="Category"
        type="text"
        placeholder="Category..."
        onChange={handelChange}
       value={produit.Category}
      /> */}
      <select   name="Category"  onChange={handelChange} className="ajoutProduit">
      <option selected>Select Category</option>
    <option  value="Gaming">Gaming</option>
    <option  value="Telephone" >Telephone</option>
    <option  value="pc protable"  >pc portable</option>
    
    
  </select>

      <input className="ajoutProduit"
        name="Prix"
        type="text"
        placeholder="Prix..."
        onChange={handelChange}
       value={produit.Prix}
      />
  <input className="ajoutProduit"
        name="Description"
        type="text"
        placeholder="Description..."
        onChange={handelChange}
         value={produit.Description}
      />
  <input className="ajoutProduit"
        name="Photo"
        type="text"
        placeholder="PhotoURL..."
        onChange={handelChange}
        value={produit.Photo}
       />


      
        <button className="btn btn-success"
          type="button"
          value="add"
         // className="add-button"
          onClick={add }>Ajouter
          </button>
       </div>
    </div>
  );
};

export default AddProduct; 