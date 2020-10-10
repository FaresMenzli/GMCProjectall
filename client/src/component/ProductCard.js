import React,{useEffect, useState} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import { Button, Modal } from "react-bootstrap";
import {useDispatch} from "react-redux"
import {addtocart } from "../js/actions/actionPanier"  
import {deleteproduits,editproduit} from '../js/actions/actionsProduit'
import icons from 'glyphicons'


const ProductCard = ({produits:{_id,Name,Category,Prix,Description,Photo}},{match}) => {
  const dispatch = useDispatch() ;
  const addtopanier = () =>{
    let porducttoadd = {_id, Name ,Category,Prix,Description ,Photo}
    dispatch(addtocart(porducttoadd))
    handleClose()
  }
  //// edit prix
 const [prix,setprix]=useState(Prix)
 const[editprix,seteditprix]=useState(false)
//// edit name
const [name ,setname]=useState(Name)
const [editname, seteditname]=useState(false)

//// edit discription 
const [disp , setdisp]=useState('DZDZ')
const [editdisp ,seteditdisp]=useState(false)




  //

    const [prod, setProd] = useState({Name:"",Category:"",Prix:"",Description:""})
    const [show, setShow] = useState(false);
    const handleShow = () => {setShow(true);
    }
 
    const handleClose = () => setShow(false);

 //   const produitAAfficher = (id)=>{
   //     const result = props.produits.filter(e => e._id == id)
          
     //     return result
         
    //}
    ////fonction delete
    const effacer = ()=>{
      dispatch(deleteproduits(_id))
      window.location.reload()
      
      
    }
   
    //// edit produit
    //name 
    const modifiername = ()=>{
      seteditname(!editname)
      
    }
    const confirname = ()=>{
      dispatch(editproduit(_id,name,Prix,Description))
      seteditname(false)
      //window.location.reload(true)
    }

// prix 
const modifierprix = ()=>{
  seteditprix(!editprix)
}
const confirmprix = () =>{
  dispatch(editproduit(_id,Name,prix,Description))
  seteditprix(false)
 // window.location.reload(true)
}


    console.log(name)
    return (
        <BrowserRouter>
  
        
  
               <div className="text-center"key={_id}>
                {/* <Link  to={`/produit/${e._id}` }>   */}
              
                  {/*   {console.log(e._id)}
                    {console.log("fares")} */}
             <div key={_id}  className="card border-primary mb-5 mr-5 mt-5 cardCust">
                <p className="  card-header  "><b>{Category}</b></p>
               <div style={{display:'flex', height:'50px',justifyContent:'space-around'}}>
                { editname ? <> <input defaultValue={Name} value={name} onChange={e=>setname(e.target.value)}/> 
                  <Button className='editbutton' onClick={confirname}>{icons.ok}</Button>
                 </> : <p className="mt-3 text-primary"> <b> {Name}</b></p>}
                  <Button   className='editbutton' onClick={modifiername}>{icons.edit}</Button>
                </div>
                <div style={{display:'flex', height:'50px',justifyContent:'space-around'}}>
                { editprix ? <> <input defaultValue={Prix} value={prix} onChange={e=>setprix(e.target.value)}/> 
                  <Button className='editbutton' onClick={confirmprix}>{icons.ok}</Button>
                 </> : <h4 className="mt-3 text-danger">{Prix}dt</h4>}
                  <Button className='editbutton' onClick={modifierprix} >{icons.edit}</Button>

                                                
                </div>
                <div style={{marginTop:"10px"}}>
                <p>{Description}</p>
                </div>
                <img className=" imageproduit "alt="img" src={Photo}></img>
                
                <Link  to={`/produit/${_id}` }>  
                <Button className="buttonDetails" variant="success"  onClick={handleShow} >
          Product Details
        </Button> 

        </Link>
        {/* h delete button from db */}
        
               
        <Button className='btn btn-danger' onClick={effacer}>Effacer produit</Button>
        </div>
        
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
            {/* setProd(produitAAfficher(match.params._id)[0])*/}
            {/*console.log(prod)*/}
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <table>

           <tr><td> Name :</td> <td>{Name}</td></tr>
           <tr><td> Category :</td> <td>{Category}</td></tr>
           <tr><td> Preis :</td> <td>{Prix}</td></tr>
           <tr><td> Description :</td> <td>{Description}</td></tr>
           <tr><img width="300px" height="300px" src={Photo}></img></tr>
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

export default ProductCard
