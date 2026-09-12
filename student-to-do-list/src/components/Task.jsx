import { Link } from "react-router-dom";

function Task({tasks}) {

  return (
    <main>
      <h2>My Tasks</h2>

      <div className="tasks-container">
        {tasks.map((task) => (
          <Link to={`/tasks/${task.id}`} key={task.id} style={{ textDecoration: 'none' }}>
            <article className="task-card">
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <span className="task-status">{task.status}</span>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Task;