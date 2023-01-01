import React, { useSyncExternalStore } from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import authContext from '../../context/AuthContext'

export default function Login() {

  //Navigate
  const navigate = useNavigate()
  //Auth Context 
  const{loginUser} = useContext(authContext)

  const[logs,setLogs] = useState({email:"",pass:""});

  const handleChange=(e)=>{
    setLogs({...logs,[e.target.name]:e.target.value});
  }
   const handleLogin=async()=>{
    const newLogin = await loginUser(logs.email,logs.pass);
    if(newLogin.success)
    {
      localStorage.setItem('token',newLogin.jwtData);
      console.log(newLogin.jwtData);
       navigate('/');
    }
    }
    const[showpass,setShowpass] = useState("password");
    const handlePassword=()=>{
      if(showpass==="password")
      {setShowpass("text");}
      else
      {setShowpass("password");}
    }
  return (
<div>
  <h2 className='text-success text-center'>makeTodo</h2>
    <div className="container p-5 border shadow mt-3">
      <h3 className='text-center'>Log In</h3>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control border shadow" name='email' value={logs.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type={`${showpass}`} className="form-control border shadow" name='pass' value={logs.pass} onChange={handleChange} id="exampleInputPassword1"/>
    </div>
    <div>
    <input type="checkbox" className="form-check-input" onClick={handlePassword} id="exampleCheck1"/>
    <label className="form-check-label mb-3">Show Passwrod</label>
    </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
    <label className="form-check-label">Check me out</label>
  </div> */}
  <div className='mb-3'>
  <button onClick={handleLogin} className="btn btn-dark border shadow btn-lg">Log in</button>
  </div>
  <div>
    <p>Forget password </p>
  </div>
  <div>
    <p>Don't have Account ? <a href='/signup' >Sign Up</a></p>
  </div>
    </div>
    </div>
  )
}
