import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./css/update.css"
const Update = () => {
    const params=useParams()
    const navigate=useNavigate()


    const [tournamentName, settournamentName]=useState("")
    const [startDate, setstartDate]=useState("")
    const [endDate  , setendDate  ]=useState("")
  



    const gets=async()=>{
     

         await axios.get("https://6258573d0c918296a495a609.mockapi.io/datas/"+ params.id)
        .then((res)=>{
            console.log(res.data)
            
settournamentName(res.data.tournamentName)
setstartDate(res.data.startDate)
setendDate(res.data.endDate)



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
    const ans={  tournamentName,
      startDate,
      endDate,
     }
    await axios.put("https://6258573d0c918296a495a609.mockapi.io/datas/"+ params.id,ans)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
navigate("/")
}

  return (
    <div className="container2">

   <div className='wrapper1'>
    
       <form   onSubmit={handleupdate}>

  <h1>Update Tournament</h1>
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

export default Update