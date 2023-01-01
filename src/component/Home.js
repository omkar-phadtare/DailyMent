import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import authContext from '../context/AuthContext'
import AddNote from './AddNote'
import Cards from './Cards'
import Navbar from './Navbar'
import './CSS/Home.css'
import { useState } from 'react'

export default function Home(props) {

  const{fetchAllNotes,data,GetUser} = useContext(authContext);
  const[logs,setLogs] = useState("is-hidden");
  const[addbtn,setAddbtn] = useState("")
  var usname;
  useEffect(() => {
    if(localStorage.getItem("token")===null)
    {
      setLogs("");
      setAddbtn("is-hidden");
    }else
    {
      NotesDetail();
      setAddbtn("");
    }
     
    userDetail();
  },[])

 const NotesDetail=async()=>{
  const allNotes = await fetchAllNotes();
  }

  const[userName,setUserName] = useState();
  const userDetail = async()=>{
    const dddd = await GetUser()
    setUserName(dddd.name);
  }
  //ROW : row g-2
  //col-md-6 col-lg-4 z-2
  const handleCheck=()=>{
    props.showAlert("Button is Working","success");
  }
  return (
    <div className='mt-4 pt-5'>
      
        <h1 className='text-center fw-light'>Welcome <span className='ps-2'>   </span>{userName}</h1>
        {/* <button className='btn btn-dark' onClick={handleCheck}>Check</button> */}
        <div className="container text-center">
<div className={`${logs}`}><h2>Please Login ... </h2></div>
  <div className="row ">
  {
        data.map(u=>(
    <div className="col-md-6 col-lg-4" key={u._id}>
      <div className="p-2"><Cards title={u.title} description={u.description} tag={u.tag} bg={u.background} nid={u._id} showAlert={props.showAlert}/></div>
    </div>)
        )
  }
  </div>
</div >
<div className={`${addbtn}`}><AddNote showAlert={props.showAlert}/></div>
    </div>
  )
}
