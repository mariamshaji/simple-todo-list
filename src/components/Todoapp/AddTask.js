import React, { useState } from 'react';

function AddTask({addTask}) {

  const[value,setValue]=useState('')

  const addItem=()=>{
    addTask(value)
    setValue("")
  }
  return (
    <div>
      <div className='input-container'>
         
         <input type='text' value={value} className='input' placeholder='Add a Task'
         onChange={(e)=>{setValue(e.target.value)}}/>
         
         
         <button onClick={addItem} className='add-btn'>Add </button>
       
       </div>
    </div>
  );
}

export default AddTask;
