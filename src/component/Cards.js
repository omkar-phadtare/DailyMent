import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import authContext from '../context/AuthContext'
import bg1 from '../Img/bg1.jpg'
import bg2 from '../Img/bg2.jpg'
import bg3 from '../Img/bg3.jpg'
import wbg1 from '../Img/wbg1.jpg'
import wbg2 from '../Img/wbg2.jpg'
import wbg3 from '../Img/wbg3.jpg'
import Alert from './Alert'
import './CSS/Card.css'
import UpdateNote from './UpdateNote'
export default function Cards(props) {

  var bg ="";
  var col="white"
  if(props.bg==='bg1')
  { bg = bg1;}
  else if(props.bg==='bg2')
  { bg = bg2;}
  else if(props.bg==='bg3')
  { bg = bg3;}
  if(props.bg==='wbg1')
  { bg = wbg1;
    col="black"}
  else if(props.bg==='wbg2')
  { bg = wbg2;
    col="black"}
  else if(props.bg==='wbg3')
  { bg = wbg3;
    col="black"}
  
    const style={
        maxWidth:"35rem",
        backgroundImage:`url(${bg})`,
        color:`${col}`,
        backgroundSize:"cover"
    }
    //text-bg-transparent
    console.log(props.bg)

    const{deleteNotes,fetchAllNotes} = useContext(authContext)
    const[alert,setAlert] = useState("is-hidden")
    const handleDelete=async()=>{
      const note = await deleteNotes(props.nid);

      if(note.stat==true)
      {
        props.showAlert("TODO note is Deleted","danger");
        fetchAllNotes();
      }
    }

    const[update,setUpdate] = useState("modal");
    const handleUpdate=()=>{
      if(update==="modal")
      {
        setUpdate("")
      }
      else
      {
        setUpdate("modal")
      }
    }

  return (
    <div>
      
        <div className="card mb-3 shadow" style={style}>
  <div className="card-header shadow head-title fs-3">{props.title}</div>
  <div className="card-body card-cont">
    <h6 className="card-title fs-6"><span className='text-secondary'>Description : </span><br></br>{props.description}</h6>
    
  </div>
  <div className="pt-4">
    <p className="card-text">{props.tag}</p>
    </div>
<div className="card-footer shadow bottom-card">

<div>
<svg xmlns="http://www.w3.org/2000/svg" onClick={handleDelete} width="20" height="20" fill="currentColor" className="bi bi-trash3 del-btn" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" onClick={handleUpdate}  width="20" height="20" fill="currentColor" class="bi bi-file-earmark-plus upd-btn" viewBox="0 0 16 16" >
  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
</svg>

</div>

  </div>
  
</div>

  <UpdateNote title={props.title} description={props.description} tag={props.tag} background={props.bg} showAlert={props.showAlert} nid={props.nid} close={update}/>

    </div>
  )
}
