import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import {toast,ToastContainer  } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
const navigate=useNavigate()
    const [firstName, setfirstName]=useState("")
    const [lastName, setlastName]=useState("")
    const [password  , setpassword  ]=useState("")
    const [designation  , setdesignation ]=useState("")
    const [phoneNumber, setphoneNumber]=useState("")

    const handlechange=async(e)=>{
        e.preventDefault()
        const ans={  firstName,
            lastName,
            password,
             designation,
             phoneNumber}
         await axios.post( "https://6258573d0c918296a495a609.mockapi.io/purchase",ans)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        
      navigate("/")
    }



   




  return (
    <div className="container1">

   
    
    <form  className='wrapper1' onSubmit={handlechange}>

  
<label>firstname</label>  
<input name='firstname'  placeholder='firstname' type='text' value={firstName} onChange={(e)=>{setfirstName(e.target.value)}}/><br/>
<label>lastname</label>
<input name='lastname' placeholder='lastname' type='text' value={lastName} onChange={(e)=>{setlastName(e.target.value)}}/><br/>
<lable>password</lable>
<input name='password' placeholder='password' type='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br/>
<label>desination</label>
<input name='desination' placeholder='desination'type='text' value={designation} onChange={(e)=>{setdesignation(e.target.value)}}/><br/>
<label>phonenumber</label>
<input name='phonenumber' placeholder='phonenumber'type='number' value={phoneNumber} onChange={(e)=>{setphoneNumber(e.target.value)}}/><br/>
<button type='onsubmit'>submit</button>

</form>
</div>

  )
}

export default Add