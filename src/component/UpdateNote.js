import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import authContext from '../context/AuthContext';
import bg1 from '../Img/bg1.jpg'
import bg2 from '../Img/bg2.jpg'
import bg3 from '../Img/bg3.jpg'
import wbg1 from '../Img/wbg1.jpg'
import wbg2 from '../Img/wbg2.jpg'
import wbg3 from '../Img/wbg3.jpg'
import './CSS/Card.css'

export default function UpdateNote(props) {

    const {updateNotes,fetchAllNotes} = useContext(authContext);
const[notes,setNotes] = useState({title:props.title,description:props.description,tag:props.tag});
const[img,setImg] = useState("wbg2")

const handleChange=(e)=>{
  setNotes({...notes,[e.target.name]:e.target.value});
}
const setImage=(event)=>{
  event.preventDefault();
  setImg(event.target.name);
}


const handleUpdate=async()=>{
    const update = await updateNotes(notes.title,notes.description,notes.tag,img,props.nid);
    if(update)
    {
        props.showAlert("TODO Note is Update","success")
        fetchAllNotes();
    }
    
}
const[close,setClose] = useState("")
const handleClose=()=>{
if(close==="")
{
  setClose("modal")
}
else{
  setClose("")
}
}

  return (
    <div className='container form-update'>
        <div>
        {/* <div className=' m-4' style={{width:"fit-content"}}>

        <button class="btn btn-light btn-lg border border-dark rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"><span>Add</span></button>
        
        </div>
        */}
<div className={`${close}${props.close}`} id="#udp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update TODO</h1>
        <button type="button" className="btn-close" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <div className="mb-3">
            <label className="col-form-label">Title:</label>
            <input type="text" name='title' value={notes.title} onChange={handleChange} className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label className="col-form-label">Description:</label>
            <textarea className="form-control" name='description' value={notes.description} onChange={handleChange} id="message-text"></textarea>
          </div>
          <div className="mb-3">
            <label className="col-form-label">Tags:</label>
            <input type="text" name='tag' value={`${notes.tag}`} onChange={handleChange} className="form-control" id="recipient-name"/>
          </div>
        <div>
            <img src={bg1} value='bg1' name='bg1' onClick={setImage} className={`border rounded set-img ${img==='bg1'?'selected-img border-primary ':''}`} width='50%' alt='b1'/>
          <img src={bg2} value='bg2' name='bg2' onClick={setImage} className={`border rounded set-img ${img==='bg2'?'selected-img border-primary ':''}`}width='50%' alt='b1'/>
            <img src={bg3} value='bg3' name='bg3' onClick={setImage} className={`border rounded  set-img ${img==='bg3'?'selected-img border-primary ':''}`} width='50%' alt='b3'/>
            <img src={wbg1} value='bg1' name='wbg1' onClick={setImage} className={`border rounded set-img ${img==='wbg1'?'selected-img border-primary ':''}`} width='50%' alt='b1'/>
          <img src={wbg2} value='bg2' name='wbg2' onClick={setImage} className={`border rounded set-img ${img==='wbg2'?'selected-img border-primary ':''}`}width='50%' height='150px' alt='b1'/>
            <img src={wbg3} value='bg3' name='wbg3' onClick={setImage} className={`border rounded  set-img ${img==='wbg3'?'selected-img border-primary ':''}`} width='50%' alt='b3'/>
       
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={handleClose} data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleUpdate} data-bs-dismiss="modal">Update Note</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}
