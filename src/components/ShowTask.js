import React from 'react'

import { useEffect } from 'react';


export const ShowTask = ({setButtonValue, seteditValue, setTaskValue, taskList, setTaskList}) => {
    


    const handleDelete = (id) => {
        setTaskList(taskList.filter(remove => remove.id !== id));
    }

    const handleEdit = (task) => {
        setButtonValue("Update");
        seteditValue(task.id);
        setTaskValue(task.name);
    }

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
      }, [taskList]);

  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{taskList.length}</span>
                <button onClick={() => setTaskList([])}className='clearAll right'>Clear all</button>
            </div>
        </div>
        <ul>
            { taskList.map((task) => (
            <li key={task.id}>
                <p>
                    <span  className='name'>{task.name}</span>
                    <span className='time'>{task.time}</span>
                </p>
                <i onClick={() => handleEdit(task)} class="bi bi-pen"></i>
                <i onClick={() => handleDelete(task.id)} className='bi bi-trash3'></i>
                
            </li>
            ))}
            
            
            
        </ul>
    </section>
  )
}


export default ShowTask;