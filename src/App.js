import { useState } from 'react';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import Header from './components/Header';
import { useEffect } from 'react';

function App() {
  let [counter, setCounter] = useState(1);

  let [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);

  let [styles, setStyles] = useState(JSON.parse(localStorage.getItem('theme')) || {"background-color": "white"});

  let [taskValue, setTaskValue] = useState("");

  let [buttonValue, setButtonValue] = useState("Add");

  let [editValue, seteditValue] = useState("");

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);



  return (
    <div style={styles} className="App">
      <Header setStyles={setStyles} />
      <AddTask counter={counter} setCounter={setCounter} editValue={editValue} buttonValue={buttonValue} setButtonValue={setButtonValue}  taskValue={taskValue} setTaskValue={setTaskValue} taskList={taskList} setTaskList={setTaskList} />
      <ShowTask key={taskList.id} setButtonValue={setButtonValue} seteditValue={seteditValue} setTaskValue={setTaskValue}  taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
