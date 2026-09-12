
import StatCard from "./Stackcard";
import TaskCard from "./Taskcard";
import AddTask from "./AddTask";

function Dashboard({tasks, setTasks}){
        function toggleTask(id){
           setTasks(
                tasks.map((task)=>{
                    if(task.id===id){
                        return{...task,
                            status: task.status==="pending"?"completed":"pending"
                        } 
                    }
                    return task;
                })     
           );
        }
        function addTask(newTask){
            setTasks([...tasks, newTask]);
        }
        function deleteTask(id){
            setTasks(tasks.filter((task) => task.id !== id));
        }

    return(
        <main>
            <div className="stack-container">
                <StatCard 
                title ={"Total Tasks"} 
                value={tasks.length}
                />
                <StatCard title={"Completed"} 
                value={tasks.filter(t => t.status === "completed").length}
                />
                <StatCard title={"Pending"} value={tasks.filter(t => t.status === "pending").length}/>
            </div>
            <AddTask onAdd={addTask}/>
            
            <h2>📋 Recent Tasks</h2>
            <div className="task-container">
                {tasks.length > 0 ? (
                    tasks.map((task)=>
                        (<TaskCard 
                            key={task.id}
                            id={task.id} 
                            title={task.title} 
                            description={task.description} 
                            status={task.status} 
                    onToggle={()=>toggleTask(task.id)} 
                    onDelete={deleteTask}
                    onSave={(updatedTask)=>setTasks(tasks.map(t =>t.id === task.id ? updatedTask: t))}
                    />
                ))
                ) : (
                    <p style={{textAlign: 'center', color: '#999', padding: '40px'}}>No tasks yet. Add one to get started!</p>
                )}
            </div>
        </main>
    );
}
export default Dashboard;