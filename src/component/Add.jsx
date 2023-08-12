import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import {toast,ToastContainer  } from 'react-toastify';
import './css/add.css'

const Add = () => {
const navigate=useNavigate()
const [tournamentName, settournamentName]=useState("")
const [startDate, setstartDate]=useState("")
const [endDate  , setendDate  ]=useState("")

    const handlechange=async(e)=>{
        e.preventDefault()
        const ans={  tournamentName,
          startDate,
          endDate,
         }
         await axios.post( "https://6258573d0c918296a495a609.mockapi.io/datas",ans)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        
      navigate("/")
    }



   




  return (
    <div className="container2">

   <div className='wrapper1'>
   
    
    <form   onSubmit={handlechange}>

    <h1>Add tournament</h1>
    <label>tournamentName</label>  
<input className='date' name='tournamentName'  placeholder='tournamentName' type='text' value={tournamentName} onChange={(e)=>{settournamentName(e.target.value)}}/>
<label>startDate</label>
<input className='date' name='startDate' placeholder='startDate' type='date' value={startDate} onChange={(e)=>{setstartDate(e.target.value)}}/>
<lable>endDate</lable>
<input className='date' name='endDate' placeholder='endDate' type='date' value={endDate} onChange={(e)=>{setendDate(e.target.value)}}/>
<button type='onsubmit'>submit</button>

</form>
</div>
</div>
  )
}

export default Add