
import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import ToDoList from './components/ToDoList/ToDoList';
import Contacts from './components/Contacts/Contacts';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, taskitem: 'Get groceries', isCompleted: false },
    { id: 2, taskitem: 'Work on project', isCompleted: false },
    { id: 3, taskitem: 'Study for school', isCompleted: false } 
  ]);

  // Function to add a new task
  const addTask = (newTaskText) => {
    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1, 
      taskitem: newTaskText,
      isCompleted: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]); 
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
    <Router>
      <header className="App-header">

          <div className="navbarcontainer d-flex align-items-center">
              <div className="container position-relative d-flex align-items-center justify-content-between">
                <h1 className="mysitebrandname">My Task Management App</h1>
                <nav id="navmenu" className="navmenu">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/contacts">Contacts</Link></li>
                      <li><Link to="/todolist">To do list</Link></li>
                    </ul>
                </nav>
              </div>
          </div>
      </header>
      <main className="main-content-wrapper d-flex justify-content-center align-items-start">
        <div className="centered-content-box">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route
              exact
              path='/todolist'
              element={
                <ToDoList
                  tasks={tasks}
                  onAddTask={addTask} 
                  onToggleCompletion={toggleTaskCompletion}
                  onDeleteTask={deleteTask} 
                />
              }
            />
            <Route
              path='/todolist/:postid'
              element={
                <ToDoList
                  tasks={tasks}
                  onAddTask={addTask}
                  onToggleCompletion={toggleTaskCompletion}
                  onDeleteTask={deleteTask}
                />
              }
            />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>          
        </div>
      </main>
    </Router>
    </div>
  );
}

export default App;
