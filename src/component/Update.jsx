import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./css/update.css"
const Update = () => {
    const params=useParams()
    const navigate=useNavigate()


    const [firstName, setfirstName]=useState("")
    const [lastName, setlastName]=useState("")
    const [password  , setpassword  ]=useState("")
    const [designation  , setdesignation ]=useState("")
    const [phoneNumber, setphoneNumber]=useState("")



    const gets=async()=>{
     

         await axios.get("https://6258573d0c918296a495a609.mockapi.io/purchase/"+ params.id)
        .then((res)=>{
            console.log(res.data)
            
setfirstName(res.data.firstName)
setlastName(res.data.lastName)
setpassword(res.data.password)
setdesignation(res.data.designation)
setphoneNumber(res.data.phoneNumber)


        })
        .catch((err)=>{
            console.log(err)
        })
    }


    useEffect(()=>{
        gets()
    },[])


const handleupdate=async(e)=>{
    e.preventDefault()
    const ans={  firstName,
      lastName,
      password,
       designation,
       phoneNumber}
    await axios.put("https://6258573d0c918296a495a609.mockapi.io/purchase/"+ params.id,ans)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
navigate("/")
}

  return (
    <div className="container1">

   
    
       <form  className='wrapper1' onSubmit={handleupdate}>

     
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

export default Update