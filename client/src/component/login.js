import React ,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Toast} from 'react-bootstrap'
import {loguser} from '../js/actions/actionUser'
function Login({history}) {
const [email , setemail] = useState('')
const [password , setpassword]= useState('')
const dispatch = useDispatch()
let data = {}
data =useSelector(state => state.reducerUser)
const submitedLog = async (e) =>{
    e.preventDefault()
 dispatch(loguser(email,password))
}
let User = {}
let mesg = {}
const token = data.token
 mesg  = data.msg
 const name = data.user
if(token)
    history.push('/')


console.log(data)

    return (
        <div className='container' style={{border:'2px',boxShadow:'1px 1px 1px 1px'}}>
            <h1 style={{marginTop:'20px'}}>Login Page</h1>
            <Form  onSubmit={submitedLog}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e =>setemail(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  value={password} onChange={e=>setpassword(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
   Login
  </Button>
</Form>
        </div>
    )
}

export default Login
