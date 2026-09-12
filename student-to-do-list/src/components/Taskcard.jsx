import DelTask from "./DelTask";

function Taskcard(props){
    const isCompleted = props.status === "completed";
    return(
        <div className="task-card" style={{opacity: isCompleted ? 0.7 : 1}}>
            <div>
                <h3 style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                    {isCompleted ? '✓' : '○'} {props.title}
                </h3>
                <p>{props.description}</p>
                <p style={{fontSize: '12px', color: '#999'}}>Task ID: {props.id}</p>
                <p style={{fontSize: '12px', color: isCompleted ? '#90EE90' : '#FFA500'}}>
                    Status: {props.status}
                </p>
            </div>
            <div style={{display: 'flex', gap: '10px', marginLeft: '15px'}}>
                <button onClick={props.onToggle} style={{whiteSpace: 'nowrap'}}>
                    {isCompleted ? '↩ Pending' : '✓ Complete'}
                </button>
                <DelTask taskId={props.id} onDelete={props.onDelete}/>
            </div>
        </div>
    );
}
export default Taskcard;