import React,{useState} from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Brand from '../Img/Brand.png'
import './CSS/Nav.css';
export default function Navbar() {
    let location = useLocation();
    const[logout,setLogout] = useState("is-hidden");
    const[logs,setLogs] = useState("is-hidden");
    console.log(localStorage.getItem("token"))
    
  useEffect(() => {
    if(localStorage.getItem("token")===null)
    {
      setLogs("");
    }else{setLogout("");}

    }, [])
    
    
    const handleLogout=()=>{
      localStorage.removeItem('token')
    }
    
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light rounded-bottom-4 shadow ">
  <div className="container-fluid">
  <a className="navbar-brand" href="/"><img className='todo-brand' src={Brand} alt='brand-name'/><span className='brand-name'>make<i className='t3'>TODO</i></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
        <li className="nav-item ps-3">
          <Link className={`nav-link ${location.pathname==='/'?'active border-bottom border-3 border-dark':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ps-4">
          <Link className={`nav-link ${location.pathname==='/about'?'active border-bottom border-3':''}`} to="/about">About</Link>
        </li> 
      </ul>
      <form className="d-flex" role="search">
          <Link to='/login'><button className={`btn btn-light form-control ${logs}`}>Log In</button></Link>
          <span className='pe-2'></span>
          <Link to='/signup'><button className={`btn btn-dark form-control ${logs}`}>Sign Up</button></Link>
          <button className={`${logout} btn btn-danger`} onClick={handleLogout} >LogOut</button>
      </form>
      
    </div>
  </div>
</nav>
    </div>
  )
}
