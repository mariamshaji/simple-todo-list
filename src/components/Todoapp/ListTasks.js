import React from 'react';


function ListTasks({task,index,removeTask}) {

    
  return (
    <div>
      <div className='listtasks'>
        {task.title}
        <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
      </div>
    </div>
  );
}

export default ListTasks;
