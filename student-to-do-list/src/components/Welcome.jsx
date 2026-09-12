import { Link } from "react-router-dom";

function Welcome() {
    return (
        <section className="welcome">
            <div className="welcome-container">
                <h1>Welcome to Task Master</h1>
                <p className="welcome-subtitle">Your Personal Task Management Portal</p>
                <p className="welcome-description">
                    Stay organized, boost productivity, and never miss a deadline. 
                    Manage all your tasks in one beautiful, intuitive place.
                </p>

                <div className="welcome-cards">
                    <div className="welcome-card">
                        <div className="welcome-card-icon">📊</div>
                        <h3>Dashboard</h3>
                        <p>View your tasks at a glance with statistics and insights</p>
                    </div>
                    <div className="welcome-card">
                        <div className="welcome-card-icon">✅</div>
                        <h3>Task Management</h3>
                        <p>Create, complete, and delete tasks with ease</p>
                    </div>
                    <div className="welcome-card">
                        <div className="welcome-card-icon">📋</div>
                        <h3>Task Details</h3>
                        <p>Get detailed information about each of your tasks</p>
                    </div>
                </div>

                <div className="welcome-cta">
                    <Link to="/dashboard" className="welcome-btn welcome-btn-primary">
                        Go to Dashboard →
                    </Link>
                    <Link to="/tasks" className="welcome-btn welcome-btn-secondary">
                        View All Tasks
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Welcome;