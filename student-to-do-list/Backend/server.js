const express = require("express")

const cors = require("cors");


const app =express(); 
app.use(cors());

const tasks =[
    {
      id: 1,
      title: "Complete React assignment",
      description: "Finish the dashboard components",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Review project documentation",    
      description: "Update the project README file",
      status: "Pending",
    }
  ];

  app.get("/api/tasks",(req,res)=>{
    res.json(tasks);
  });

app.get("/",(req,res)=>{
    res.send("Backend is Working!!")
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});