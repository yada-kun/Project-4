import './PendingTasks.scss';

const PendingTasks = ({name, donetask, deleteTask,status, dispatch}) =>{

    const onClick = (name, type) =>{
        dispatch({type: type, payload: name });
    }

    return(
            <div className = "TaskForm__display">

                <span><h4>{name}</h4></span>    
                {status === 'Pending' && <img src={donetask} alt="check if done" onClick={ () => {onClick(name, 'done')}} />}
                <img src={deleteTask} alt="check if done" onClick={ () => {onClick(name, 'delete')}} />
            </div>
        
    )
}

export default PendingTasks;