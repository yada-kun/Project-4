import './App.scss';
import AddNewTasks from './components/AddNewTask';
import PendingTasks from './components/PendingTasks';
import {useState, useReducer} from 'react';


const reducerAddingTask = (state,action ) => {
    if(action.type === 'Add'){

     return [...state,{ name : action.payload,
        donetask : 'https://cdn-icons-png.flaticon.com/512/463/463574.png',
        delete : 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png',
        status : 'Pending' 
      }]
    }

    if(action.type === 'done'){ 
       return  state.filter((task) =>{
        if(action.payload ===  task.name){
         state = {...task, status : task.status = 'Done'}
        }
        return state;
     })
    }

    if(action.type === 'delete'){
      return state.filter((task) => task.name  !== action.payload )
    }

    return state;
}
  
const App = () => {

  const [addTask, dispatchAddTask] = useReducer(reducerAddingTask, []);
  const [error, setError] = useState('');



  const addingTasks = (pendingTasks) => {

    const newTask = pendingTasks.toLowerCase()

    setError('');
    
    if(addTask.some(({name}) => name === newTask )){
      return setError('Task is already in the queue');
    }

    if(pendingTasks.trim() === ''){
      setError('Please enter a valid task');
      return;
    }
    dispatchAddTask({type: 'Add', payload: pendingTasks});

  }


  return (
    

    <div className="App">

        <h1>TO-DO APP</h1>

        <div className='addTasks'><AddNewTasks addingTasks={addingTasks} error={error} /></div>
      
        <div className='pendingTasks'>
          <div className = "TaskForm">
          <div className = "TaskForm__title"> <p>Pending Tasks</p> </div>
          {
             addTask.some((task) => task.status === 'Pending'  ) ? 
             addTask.filter((task) => task.status === 'Pending' ).map((task) =>
              <PendingTasks key={task.name} name={task.name} donetask ={task.donetask} deleteTask={task.delete} status ={task.status} dispatch={dispatchAddTask}/>
            ) 
            : <h2>No Pending Task</h2>
          }
          </div>
        </div>
      
      <div className='deleteTasks'>
          <div className = "TaskForm">
            <div className = "TaskForm__title"> <p>Done Tasks</p> </div>
              {
                 addTask.some((task) => task.status === 'Done'  ) ?
                  addTask.filter((task) => task.status === 'Done' )
                  .map((task) =>
                  <PendingTasks key={task.name} name={task.name} donetask ={task.donetask} deleteTask={task.delete} status ={task.status} dispatch={dispatchAddTask}/>
                ) 
                : <h2>TASKS DONE</h2>      
              }
            </div>
          </div>
    </div>
  );
}

export default App;


