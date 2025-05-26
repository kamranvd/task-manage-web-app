import React from 'react';
import { useParams } from 'react-router-dom';
import "./ToDoList.css"

export default function ToDoList(props) {
    console.log("ToDoList component rendered!");
    console.log("Props:", props);
    console.log("useParams:", useParams());

    const { postid } = useParams();
    const listId = postid ?? 'All';

    const currentTasks = Array.isArray(props.tasks) ? props.tasks : [];

  return (
    <div className='task-block'>
        <h2>Task Management App</h2>

        <h3>Current List: { listId }</h3>

        <form className="form-search" id="searchForm" >
            <label>
                New Task:
                <input type="text" name="task" id="taskInput" required />
            </label>
            <button className="btn-task" type="submit">Add</button>
        </form>

        <ul className="no-bullets-list">
            {currentTasks.length > 0 ? (
                currentTasks.map((task, index) => (
                    <li key={task.id || index}> 
                        <label htmlFor={`task-${task.id || index}`}> 
                            <input
                                type='checkbox'
                                id={`task-${task.id || index}`}
                                name={task.taskitem}
                                value={task.taskitem}
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