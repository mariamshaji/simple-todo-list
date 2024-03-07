import React, { useState } from 'react';
import './Todo.css'
import ListTasks from './ListTasks';
import AddTask from './AddTask';

function Todo() {
    const[tasks,setTasks]=useState([])


    const addTask=(title)=>{
        const newstates=[...tasks,{title}];
        setTasks(newstates)
    }

    const removeTask=(index)=>{
        const newstates=[...tasks]
        newstates.splice(index,1)
        setTasks(newstates)
    }
    
const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const currentDay = daysOfWeek[currentDate.getDay()];



    
    
    return (
    <div className='todo-container'>

      <div className='header'>
        
         <h2 className='heading'  >Whooop ! It's {currentDay}!!!  </h2>
         
      </div>
      
      <div className='add-task'> 
      
         <AddTask  addTask={addTask}/>  
      
      </div>
      
      <div className='list-task'> 
      {tasks.map((task,index)=>
         <ListTasks task={task} removeTask={removeTask} index={index} key={index}/>
        
      )}
      
         
      
      </div>
    
    
    </div>
  );
}

export default Todo;
