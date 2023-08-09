import { createSlice } from "@reduxjs/toolkit";

const intialState={
    tasklist:[],
    seletedtask:{}
}
export const taskslice=createSlice({
    name:"taskslice",
    intialState,
    reducers:{
      addtask:(state,action)=>{
            const id=Math.random()*100
            let task={...action.payload,id}
            state.tasklist.push(task)
      },

      removelist:(state,action)=>{
        state.tasklist=state.tasklist.filter((task)=>task.id !== action.payload.id)
      },

      updatetasklist:(state,action)=>{
        state.tasklist=state.tasklist.map((task)=>task.id ===action.payload.id ? action.payload : task)
      },

      
        setseletedtask:(state,action)=>{
            state.setseletedtask=action.payload
        },
      }
    
})
export const {addtask,removelist,updatetasklist,setseletedtask}=taskslice.actions
export default taskslice.reducer