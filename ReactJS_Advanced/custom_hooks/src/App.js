import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
    const[tasks,setTasks]=useState([]);

  const transformTask=(taskObj)=>{



    const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

      setTasks(loadedTasks);
    
  }

  const httpData=useHttp({url:"https://add-task-a9ab5-default-rtdb.firebaseio.com/task.json"},transformTask)

  const{isLoading,error,sendRequest:fetchTasks}=httpData;

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  useEffect(()=>{
    fetchTasks();
  },[fetchTasks])

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
