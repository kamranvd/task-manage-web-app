import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import "./ToDoList.css"

export default function ToDoList(props) {
    const { postid } = useParams();
    const listId = postid ?? 'All';

    const currentTasks = Array.isArray(props.tasks) ? props.tasks : [];
    const { onAddTask, onToggleCompletion } = props; 


    const [newTaskText, setNewTaskText] = useState(''); 
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
            {currentTasks.length > 0 ? (
                currentTasks.map(task => (
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
    </div>
  );
}