function Taskcard(props){
    const isCompleted = props.status === "completed";
    return(
        <div className="task-card" style={{opacity: isCompleted ? 0.7 : 1}}>
            <div>
                <h3 style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                    {isCompleted ? '✓' : '○'} {props.title}
                </h3>
                <p>{props.description}</p>
                <p style={{fontSize: '12px', color: isCompleted ? '#90EE90' : '#FFA500'}}>
                    Status: {props.status}
                </p>
            </div>
            <button onClick={props.onToggle} style={{marginLeft: '15px', whiteSpace: 'nowrap'}}>
                {isCompleted ? '↩ Pending' : '✓ Complete'}
            </button>
        </div>
    );
}
export default Taskcard;