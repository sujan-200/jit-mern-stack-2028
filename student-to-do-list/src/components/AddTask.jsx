import { useState } from "react";
function AddTask(props){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState(""); 
    function handleSubmit(e){
        e.preventDefault();
        if(!title.trim()) {
            alert("Please enter a task title");
            return;
        }
        const newTask={
            id:Date.now(),
            title:title,
            description:description,
            status:"pending"
        };
        props.onAdd(newTask);
        setTitle("");
        setDescription("");
    }
    return(
        <div className="add-task-container">
            <h2>✨ Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Task Title *</label>
                    <input 
                        id="title"
                        type="text"
                        placeholder="Enter task title..."
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        type="text"
                        placeholder="Enter task description..."
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">➕ Add Task</button>
            </form>
        </div>
    );
}
export default AddTask;