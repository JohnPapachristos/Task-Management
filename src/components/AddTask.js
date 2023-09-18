import React from 'react'

export const AddTask = ({counter, setCounter, editValue, buttonValue, setButtonValue, taskValue, setTaskValue, taskList, setTaskList}) => {
    


    const setTasks = (event) => {
        event.preventDefault();
        if(buttonValue === "Add") {
            if(taskValue !== "") {
                setCounter(counter + 1);
                const taskAdd =
                {
                    id: {counter}, name: taskValue, time: new Date(8.64e15).toUTCString()
                }
                setTaskList([...taskList, taskAdd]);
                setTaskValue("");
            } else {
                window.alert("Please enter a task first");
            }
        } else {
            let tasklist = taskList.filter(remove => remove.id !== editValue);
            console.log(taskList);
            setCounter(counter + 1);
            const tasksUpdate =
                {

                    id: {counter}, name: taskValue, time: new Date(8.64e15).toUTCString()

                }
            setTaskList([...tasklist, tasksUpdate]);
            setTaskValue("");
            setButtonValue("Add");
           
        }
        
    }

    const handleImport = (event) => {
        setTaskValue(event.target.value);
    }

    

  return (
    <section className="addTask">
        <form>
            <input onChange={handleImport} type="text" name="task"  autoComplete='off' placeholder='add task' maxLength={20} value={taskValue}/>
            <button onClick={setTasks} type="submit">{buttonValue}</button>
        </form>
        <h4>{taskValue}</h4>
    </section>
  )
}

export default AddTask;
