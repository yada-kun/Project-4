import {useState} from 'react';
import './AddNewTasks.scss';

const AddNewTasks = ({addingTasks, error}) =>{
    const [addTask, setAddTask] = useState('');

    const getTask = (e) => {
        e.preventDefault();
        
        addingTasks(addTask);
        setAddTask('');
    }

    return(
        <div className = "AddTaskForm">

            <div className = "AddTaskForm__title"> <p>New Task</p> </div>

            <div className = "AddTaskForm__content">

            <h2>Task Name</h2>
            <input type="text" placeholder="Add New Task" value={addTask} onChange={(e) => setAddTask(e.target.value)} />
            <h4>{error}</h4>
            <button type="button" onClick={(e) => getTask(e)}>+ Add Task</button>

            </div>
        </div>
    )
}

export default AddNewTasks;