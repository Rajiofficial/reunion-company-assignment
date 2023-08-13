import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./css/home.css"

const Home=()=>{
console.log("data")
const navi=useNavigate()
    const [data ,setdata]=useState([])

    const datas=async()=>{
        await axios.get("https://6258573d0c918296a495a609.mockapi.io/datas")
        .then((res)=>{
            console.log(res.data)
            setdata(res?.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
datas()
    },[])


// @@@@@@@@@@@@@@@@@@2
const handledelete=async(i)=>{
await axios.delete("https://6258573d0c918296a495a609.mockapi.io/datas/"+i)
datas()
}

const handleupdate=(i)=>{
navi(`/update/${i}`)
}

const edit=()=>{
    navi('/Add')
    }
    
const participatelist=(i)=>{

  navi(`/part/${i}`)

}    


return(
    
        

<div>

  
            <div>
            <button className="btnadd" onClick={()=>edit()}>add</button>
        </div>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">tournamentName</th>
      <th scope="col">startDate</th>
      <th scope="col">endDate</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
      <th scope="col">Participant</th>
     
    </tr>
  </thead>
  <tbody>
    {data.map((e,i)=>{
      return<tr key={i}>
         <td>{e.id}</td>
        <td>{e.tournamentName}</td>
        <td>{e.startDate}</td>
        <td>{e.endDate}</td>
      
        
  
      
       
<td><button type="button" class="btn btn-primary" onClick={()=>{handleupdate(e.id)}} >edit</button></td>
<td><button type="button" class="btn btn-danger" onClick={()=>{handledelete(e.id)}}>delete</button></td>
<td><button type="button" class="btn btn-danger" onClick={()=>{participatelist(e.id)}}>participatelist</button></td>

      </tr>
    })}

  </tbody>
</table>

 </div>
   
      




)

        }
export default Home;

