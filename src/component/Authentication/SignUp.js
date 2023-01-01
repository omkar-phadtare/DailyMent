import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import authContext from '../../context/AuthContext'

export default function SignUp() {

    const navigate = useNavigate();
    const{createUser} = useContext(authContext)
    
    let[newuser,setnewUser] = useState({uname:"",email:"",pass:""});

    let handleChange=(e)=>{
        setnewUser({...newuser,[e.target.name]:e.target.value});
    }
    const handleSignup=async(e)=>{
        e.preventDefault();
        const Data = await createUser(newuser.uname,newuser.email,newuser.pass);
        if(Data.success)
        {
            navigate('/login');
        }
    }

  return (
    <div>
    <div className='container p-5 border shadow mt-3'>
        <h2>Sign Up</h2>
        <div class="mb-3">
    <label class="form-label">User name</label>
    <input type="text" class="form-control shadow"  name='uname' onChange={handleChange} value={newuser.uname} />
    
  </div>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control shadow" name="email" value={newuser.email} aria-describedby="emailHelp" onChange={handleChange}/>
    <div id="emailHelp" class="form-text ">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control shadow" name='pass' value={newuser.pass} onChange={handleChange}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input"/>
    <label class="form-check-label">Check me out</label>
  </div>
  <div>
  <button onClick={handleSignup} class="btn btn-primary mb-3">Submit</button>
  </div>
  <div>
    <p>Already have accound ? <a href='/login' >Log In</a></p>
  </div>
    </div>
    
    </div>
  )
}
