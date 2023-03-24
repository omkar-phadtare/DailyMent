import React from "react";
import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props)=>{
    const st = 
    {
        "uname": "omkar",
        "class": "c"
    }
    const[state,setState] = useState(st);

    const[data,setData] = useState([]);
    const[jwt,setJWT] = useState();
    const[userD,setUserD] = useState([]);


    //FETCH ALL NOTES
    const fetchAllNotes=async()=>{
        const allnotes = await fetch("https://node-test-h2n4.onrender.com/api/notes/fetchallnotes",
        {
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
               // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MGNjYjcxOThmYzk1ZGUwZWVmMDA2In0sImlhdCI6MTY3MDQzNDA2Nn0.Galnn5l9CzponDmTViMXcJDuq1FEAaK9XobhceLXMiw",
               'auth-token': localStorage.getItem('token')
            },
            body:JSON.stringify()
        }
        )

        
        const datafetch = await allnotes.json()
         
        setData(datafetch);
        // setData(datafetch);
    }

//DELETE NOTE AS PER USER
const deleteNotes = async(noteId)=>{
    console.log(noteId);
    const deleteOne = await fetch(`https://node-test-h2n4.onrender.com/api/notes/deletenotes/${noteId}`,
    {
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')        
        },
    })

    const delStatus = await deleteOne.json();

   return delStatus;
}


//ADD NEW NOTES
    const addNotes=async(title1,description1,tag1,background1)=>{

        const detail = {
            title:title1,
            description:description1,
            tag:tag1,
            background:background1
        }
        console.log(background1);
        const newNote = await fetch("https://node-test-h2n4.onrender.com/api/notes/addnotes",
        {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                //"auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MGNjYjcxOThmYzk1ZGUwZWVmMDA2In0sImlhdCI6MTY3MDQzNDA2Nn0.Galnn5l9CzponDmTViMXcJDuq1FEAaK9XobhceLXMiw",
                'auth-token': localStorage.getItem('token')
            },
            body:JSON.stringify(detail)
        })

        return newNote;
    }

    //UPDATE NOTE
    const updateNotes=async(title1,description1,tag1,background1,noteId)=>{

        const detail = {
            title:title1,
            description:description1,
            tag:tag1,
            background:background1
        }
        const newNote = await fetch(`https://node-test-h2n4.onrender.com/api/notes/updatenotes/${noteId}`,
        {
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
                //"auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MGNjYjcxOThmYzk1ZGUwZWVmMDA2In0sImlhdCI6MTY3MDQzNDA2Nn0.Galnn5l9CzponDmTViMXcJDuq1FEAaK9XobhceLXMiw",
                'auth-token': localStorage.getItem('token')
            },
            body:JSON.stringify(detail)
        })
        const update = await newNote.json();
        return update;
        
    }

    const createUser= async(uname,uemail,upassword)=>{
        console.log("Enter in create")
        const userDetail={
            name:uname,
            email:uemail,
            password:upassword
        }
        const newUser = await fetch(`https://node-test-h2n4.onrender.com/api/auth/create`,
       {
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(userDetail)
        })

        const data = await newUser.json();
        console.log(data);

        return data;

    }


//LOGIN USER uSING CREDENTIAL
    const loginUser =async(userEmail,userPassword)=>{
        console.log("Enter in create")
        const userDetail={
            email:userEmail,
            password:userPassword
        }
        

    const newUser = await fetch("https://node-test-h2n4.onrender.com/api/auth/ulogin",
       {
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(userDetail)
        })
        console.log("User Created");
        const UserToken =await newUser.json();
        console.log(UserToken);
         setJWT(UserToken);
         //console.log(jwt.jwtData)
        // console.log(jwt);
        return UserToken;
        
    }

//Worker AuthContext 

      const GetUser=async()=>{
        const newUser = await fetch("https://node-test-h2n4.onrender.com/api/auth/getuser",
       {
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'auth-token': localStorage.getItem('token')
        },
        
        })
        const userData = await newUser.json();

        return userData;
      }

    return(
        <AuthContext.Provider value={{jwt,state,fetchAllNotes,data,addNotes,deleteNotes,updateNotes,createUser,loginUser,GetUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;