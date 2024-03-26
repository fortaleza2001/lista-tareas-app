import { useEffect, useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Container from './components/Container'
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from './components/TaskContent';



function App() {

  //Paso las tareas a localstorage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"))

  if(!initialTasks)
  {
    initialTasks = []
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
   if(initialTasks)
   {
    localStorage.setItem("tasks",JSON.stringify(tasks))
   }

   else
   {
    localStorage.setItem("tasks",JSON.stringify([]))
   }
  
   
  }, [initialTasks,tasks])
  
  const createTask = (task) =>{
    setTasks([...tasks,task])
    
  }

  const deleteTask = (id) =>{
    const currentTasks = tasks.filter((task) => task.idtask!==id)
    setTasks(currentTasks)
  }
  return (
    
    <Container>
      <Header/>
      <InputTask createTask={createTask}/>
      <TaskContent tasks = {tasks} deleteTask={deleteTask}/>
    </Container>
      
    
  );
}

export default App;
