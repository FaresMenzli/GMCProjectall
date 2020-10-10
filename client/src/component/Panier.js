import React,{useState} from 'react'
import {useSelector } from "react-redux"
import {useDispatch} from "react-redux"
import {deletecart } from "../js/actions/actionPanier"  

const Panier = () => {
  
 const dispatch = useDispatch() ;
  const deleteFromCart = (id) => {
    

    dispatch(deletecart(id))
  }
  const addcartdb = () => {
   
  //dispatch(());
  
};

 

   
      const panier =useSelector((state)=> state.reducerPanier.panier)
      let total=0
    return (
        <div className=" cartBackground" style={{height:"720px"}}>
            <table className="container table mt-5">
              <tbody>
            {panier.map((e)=>
            
            <tr key={e._id} ><td>{e.Name}</td>
            <td style={{display:"none"}}>{total= total+ parseInt(e.Prix)}</td>
            <td>{e.Prix}</td>
            <td><img height="60px" width="60px" src={e.Photo} ></img></td>
            <td><input name={e._id} type="image"src="https://img.icons8.com/cotton/2x/delete-sign--v2.png"width="20px" height="20px" alt="img"  onClick={()=>deleteFromCart(e._id)}></input></td>
            
            </tr>
         
         
           )}
 </tbody>
 <tfoot><tr > <span style={{fontSize: "100%"}} className="mt-5 container badge badge-pill badge-success">le totale est de {total} D.T</span></tr></tfoot>
</table>
<div  className=" mt-5 mb-5 d-flex justify-content-center">
<button className="  btn btn-outline-success"> Confirmer la commande</button>
</div>      
            
        </div>
    )
}

export default Panier
