import React,{useState} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import { Button, Modal } from "react-bootstrap";
import {useDispatch} from "react-redux"
import {addtocart } from "../js/actions/actionPanier"  


const ProductCardcat = (props,{match}) => {
  const dispatch = useDispatch() ;
  const addtopanier = () =>{
    let porducttoadd = {_id:prod._id, Name:prod.Name ,Category:prod.Category,Prix:prod.Prix,Description:prod.Description ,Photo:prod.Photo}
    dispatch(addtocart(porducttoadd))
    handleClose()
  }

  //

    const [prod, setProd] = useState({Name:"",Category:"",Prix:"",Description:""})
    const [show, setShow] = useState(false);
    const handleShow = () => {setShow(true);
    }
 
    const handleClose = () => setShow(false);
   


    const produitAAfficher = (id)=>{
        const result = props.produits.filter(e => e._id == id)
          
          return result
         
    }
    return (
        <BrowserRouter>
        
        
        <div className="mainContainer "  >
            {props.produits.map((e )=>(
               <div className="text-center"key={e._id}>
                {/* <Link  to={`/produit/${e._id}` }>   */}
              
                  {/*   {console.log(e._id)}
                    {console.log("fares")} */}
             <div key={e._id}  className="card border-primary mb-5 mr-5 mt-5 cardCust" >
                <p className="  card-header  "><b>{e.Category}</b></p>
                <p className="mt-3 text-primary"> <b> {e.Name}</b></p>
                <p>{e.Prix}</p>
                <p>{e.Description}</p>
                <img className=" imageproduit "alt="img" src={e.Photo}></img>

                <Link  to={`/produit/${e._id}` }>  
                <Button className="buttonDetails" variant="success"  onClick={handleShow} >
          Product Details
        </Button> 
        </Link>
        </div>
        
             </div> )  )}
        </div>
        
        <Route path={`/produit/:_id`} render= {({match}) =>( 
        <div> 
            {/* <h3 className="text-center"> 
            {setProd(produitAAfficher(match.params._id)[0])}
         
            {console.log(prod)}
         <p>{<ProductDetails prod={prod}></ProductDetails>}</p> 
           <p>{  match.params._id}  </p>
        <p>{props.prodit}</p>
            </h3> */}
            { setProd(produitAAfficher(match.params._id)[0])}
            {console.log(prod)}
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <table>

           <tr><td> Name :</td> <td>{prod.Name}</td></tr>
           <tr><td> Category :</td> <td>{prod.Category}</td></tr>
           <tr><td> Preis :</td> <td>{prod.Prix}</td></tr>
           <tr><td> Description :</td> <td>{prod.Description}</td></tr>
           <tr><img width="300px" height="300px" src={prod.Photo}></img></tr>
        </table>

            
            
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addtopanier}>
              Ajouter au Panier
            </Button>
          </Modal.Footer>
        </Modal>
      
           
        </div> )}>
        </Route>
        
        </BrowserRouter>
        
    )
}

export default ProductCardcat