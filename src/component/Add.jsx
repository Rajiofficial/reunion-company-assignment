import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import {toast,ToastContainer  } from 'react-toastify';
import * as yub from 'yup';
import {useFormik,} from 'formik'
import './css/add.css'

const Add = () => {
const navigate=useNavigate()
// const [member  , setmember  ]=useState("")
// const [tournamentName, settournamentName]=useState("")
// const [startDate, setstartDate]=useState("")
// const [endDate  , setendDate  ]=useState("")


const formik=useFormik({
  initialValues:{
    member : '',
    tournamentName: '',
    startDate: '',
    endDate: ''
  },
  validateYupSchema:yub.object({
    member:yub.string().required('* required'),
    tournamentName:yub.string().required('* required'),
    startDate:yub.date("ender the date").required('* required'),
    endDate:yub.date("ender the date").required('* required'),
  }),
  onSubmit:values=>{
    console.log(values)
  handlechange(values)
  }
})

const handlechange=async(values)=>{
   
       
  await axios.post( "https://6258573d0c918296a495a609.mockapi.io/datas",values)
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
   
    
    <form onSubmit={formik.handlechange}>

    <h1>Add tournament</h1>

    <div className="form-group">
    <label htmlFor="name">member</label>
    <input className='date' id='member' name='member' 
     placeholder='person name' type='text'
     onBlur={formik.handleBlur}
      value={formik.values.member} 
      onChange={formik.onChange}/>
      {formik.touched.member && formik.errors.member ?<div style={{color:"red"}}>{formik.errors.member}</div>:null}
   </div>
   
   
   <div className="form-group">
    <label htmlFor="name">tournamentName</label>
    <input className='date' id='tournamentName' name='tournamentName' 
     placeholder='tournamentName' type='text'
     onBlur={formik.handleBlur}
      value={formik.values.tournamentName} 
      onChange={formik.onChange}/>
      {formik.touched.tournamentName && formik.errors.tournamentName ?<div style={{color:"red"}}>{formik.errors.tournamentName}</div>:null}
   </div>

   
   <div className="form-group">
    <label htmlFor="name">startDate</label>
    <input className='date' id='startDate' name='startDate' 
     type='date'
     onBlur={formik.handleBlur}
      value={formik.values.startDate} 
      onChange={formik.onChange}/>
      {formik.touched.startDate && formik.errors.startDate ?<div style={{color:"red"}}>{formik.errors.startDate}</div>:null}
   </div>

   
   <div className="form-group">
    <label htmlFor="name">endDate</label>
    <input className='date'id='endDate' name='endDate' 
      type='date'
     onBlur={formik.handleBlur}
      value={formik.values.endDate} 
      onChange={formik.onChange}/>
      {formik.touched.endDate && formik.errors.endDate ?<div style={{color:"red"}}>{formik.errors.endDate}</div>:null}
   </div>

   <div className="form-group">

   <button type='submit'>submit</button>

   </div>


</form>
<formik/>
</div>
</div>
  )
}

export default Add