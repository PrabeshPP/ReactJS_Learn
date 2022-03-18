import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const httpData=useHttp()

  const{isLoading,error,sendRequest:sendTaskRequest}=httpData;

  


  const enterTaskHandler = async (taskText) => {
    const createTask=(taskData)=>{
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
  
      props.onAddTask(createdTask);
    }


    sendTaskRequest(
      {url:'https://add-task-a9ab5-default-rtdb.firebaseio.com/task.json',
                    method: 'POST',
                    headers: {
                  'Content-Type': 'application/json',
                    },
                  body:{ text: taskText }
    },createTask.bind(null,taskText))
   
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;