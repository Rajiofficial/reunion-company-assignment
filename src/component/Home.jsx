import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Home=()=>{
console.log("data")
const navi=useNavigate()
    const [data ,setdata]=useState([])

    const datas=async()=>{
        await axios.get("https://6258573d0c918296a495a609.mockapi.io/purchase")
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
await axios.delete("https://6258573d0c918296a495a609.mockapi.io/purchase/"+i)
datas()
}

const handleupdate=(i)=>{
navi(`/update/${i}`)
}

const edit=()=>{
    navi('/Add')
    }
    
    


return(
    
        

<div>
            <div>
            <button onClick={()=>edit()}>add</button>
        </div>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">password  </th>
      <th scope="col">designation </th>
      <th scope="col">phoneNumber </th>
      <th scope="col">delete </th>
      <th scope="col">edit </th>
    </tr>
  </thead>
  <tbody>
    {data.map((e,i)=>{
      return<tr key={i}>
         <td>{e.id}</td>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.password}</td>
        <td>{e.designation}</td>
        <td>{e.phoneNumber}</td>
       
<td><button type="button" class="btn btn-primary" onClick={()=>{handleupdate(e.id)}} >edit</button></td>
<td><button type="button" class="btn btn-danger" onClick={()=>{handledelete(e.id)}}>delete</button></td>

      </tr>
    })}

  </tbody>
</table>


    </div>
   
      




)

        }
export default Home;

