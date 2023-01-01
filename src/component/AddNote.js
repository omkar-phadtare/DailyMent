import React from 'react'
import './CSS/AddNote.css';
import bg1 from '../Img/bg1.jpg'
import bg2 from '../Img/bg2.jpg'
import bg3 from '../Img/bg3.jpg'
import wbg1 from '../Img/wbg1.jpg'
import wbg2 from '../Img/wbg2.jpg'
import wbg3 from '../Img/wbg3.jpg'
import { useContext } from 'react';
import authContext from '../context/AuthContext';
import { useState } from 'react';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';

export default function AddNote(props) {

const {addNotes,fetchAllNotes} = useContext(authContext);
const[notes,setNotes] = useState({title:"",description:"",tag:""});
const[img,setImg] = useState("wbg2")

const[addAlert,setAddAlert] = useState("visually-hidden")
const[imgSel,setImgSel] = useState()

const handleChange=(e)=>{
  setNotes({...notes,[e.target.name]:e.target.value});
}
const setImage=(event)=>{
  event.preventDefault();
  setImg(event.target.name);
}

const navigate = useNavigate();
const handleAddNote=async()=>{
  const newNote = await addNotes(notes.title,notes.description,notes.tag,img);
  props.showAlert("Note add to TODO list","success");
  if(newNote.stat===true)
  {
  fetchAllNotes();
  }
}
  return (
    <div>
     
        <div className='fixed-bottom m-4' style={{width:"fit-content"}}>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ADD</button>        
        </div>
       
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add TODO</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleAddNote} data-bs-dismiss="modal">Add Note</button>
      </div>
    </div>
  </div>
  </div>

    </div>
    </div>
  )
}
