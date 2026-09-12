import {useParams, Link} from "react-router-dom";

function TaskDetails({tasks}){
    const {taskId} = useParams();
    
    if (!tasks || tasks.length === 0) {
        return (
            <div className="task-not-found">
                <h2>No tasks available</h2>
                <p>Please add some tasks to get started.</p>
                <Link to="/tasks" className="task-details-link">← Back to Tasks</Link>
            </div>
        );
    }
    
    const task = tasks.find((task) => task.id === Number(taskId));
    
    if (!task) {
        return (
            <div className="task-not-found">
                <h2>Task not found</h2>
                <p>Task ID <strong>{taskId}</strong> does not exist in your task list.</p>
                <Link to="/tasks" className="task-details-link">← Back to Tasks</Link>
            </div>
        );
    }
    
    return(
        <div className="task-details-container">
            <h2>Task Details</h2>
            
            <div className="task-details-item">
                <strong>Task ID</strong>
                <p>{task.id}</p>
            </div>
            
            <div className="task-details-item">
                <strong>Title</strong>
                <p>{task.title}</p>
            </div>
            
            <div className="task-details-item">
                <strong>Description</strong>
                <p>{task.description}</p>
            </div>
            
            <div className="task-details-item">
                <strong>Status</strong>
                <p><span className="task-details-status">{task.status}</span></p>
            </div>
            
            <Link to="/tasks" className="task-details-link">← Back to Tasks</Link>
        </div>
    );
}

export default TaskDetails;