import StatCard from "./Stackcard";
import TaskCard from "./Taskcard";
import AddTask from "./AddTask";
import { useState } from "react";
function Dashboard(){
      const [tasks, setTasks ]=useState([
        {id:1,title:"learn React",description:"to be finished in 5 days",status:"pending"},
        {id:2,title:"learn mern",description:"to be finished in 3 days",status:"pending"},
        {id:3,title:"learn mongodb",description:"to be finished in 3 days",status:"pending"}]);
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

    return(
        <main>
            <div className="stack-container">
                <StatCard title ={"Total Tasks"} value={tasks.length}/>
                <StatCard title={"Completed"} value={tasks.filter(t => t.status === "completed").length}/>
                <StatCard title={"Pending"} value={tasks.filter(t => t.status === "pending").length}/>
            </div>
            <AddTask onAdd={addTask}/>
            <h2>📋 Recent Tasks</h2>
            <div className="task-container">
                {tasks.length > 0 ? (
                    tasks.map((task)=>(<TaskCard key={task.id} title={task.title} description={task.description} status={task.status} 
                    onToggle={()=>toggleTask(task.id)}/>
                ))
                ) : (
                    <p style={{textAlign: 'center', color: '#999', padding: '40px'}}>No tasks yet. Add one to get started!</p>
                )}
            </div>
        </main>
    );
}
export default Dashboard;