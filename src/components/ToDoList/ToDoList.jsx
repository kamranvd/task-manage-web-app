import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import "./ToDoList.css"

export default function ToDoList(props) {
    const { postid } = useParams();
    const listId = postid ?? 'All';

    const currentTasks = Array.isArray(props.tasks) ? props.tasks : [];
    const { onAddTask, onToggleCompletion } = props; 

    const [newTaskText, setNewTaskText] = useState(''); 
    const [filter, setFilter] = useState('all');

    const handleInputChange = (event) => {
        setNewTaskText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (newTaskText.trim()) { 
            onAddTask(newTaskText.trim()); 
            setNewTaskText(''); 
        }
    };

    const handleCheckboxChange = (taskId) => {
        onToggleCompletion(taskId); 
    };

    const getFilteredTasks = () => {
        switch (filter) {
            case 'active':
                return currentTasks.filter(task => !task.isCompleted);
            case 'completed':
                return currentTasks.filter(task => task.isCompleted);
            case 'all':
            default:
                return currentTasks;
        }
    };

    const filteredTasks = getFilteredTasks();

  return (
    <div>
        <h2>Task Management App</h2>

        <h3>Current List: { listId }</h3>

        {/* New Task Form */}
        <form className="form-search" onSubmit={handleSubmit}> 
            <label>
                New Task:
                <input
                    type="text"
                    name="task"
                    id="taskInput"
                    value={newTaskText} 
                    onChange={handleInputChange}
                    required
                />
            </label>
            <button className="btn-task" type="submit">Add</button>
        </form>

        {/* Task List */}


        <ul className="no-bullets-list">
            {filteredTasks.length > 0 ? (
                filteredTasks.map(task => (
                    <li key={task.id}>
                        <label htmlFor={`task-${task.id}`} className={task.isCompleted ? 'completed-task-label' : ''}>
                            <input
                                type='checkbox'
                                id={`task-${task.id}`}
                                name={task.taskitem}
                                value={task.taskitem}
                                checked={task.isCompleted} 
                                onChange={() => handleCheckboxChange(task.id)} 
                            />
                            {task.taskitem}
                        </label>
                    </li>
                ))
            ) : (
                <li>
                    No tasks yet!
                </li>
            )}
        </ul>
            <div className="task-filters"> 
                Show:
            <button
                className={`filter-button ${filter === 'all' ? 'active-filter' : ''}`}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                className={`filter-button ${filter === 'active' ? 'active-filter' : ''}`}
                onClick={() => setFilter('active')}
            >
                Active
            </button>
            <button
                className={`filter-button ${filter === 'completed' ? 'completed' : ''}`}
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
            </div>
    </div>
  );
}