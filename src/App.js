
import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import ToDoList from './components/ToDoList/ToDoList';
import Contacts from './components/Contacts/Contacts';

function App() {

  const tasks = [
    { id: 1, taskitem: 'Get groceries' },
    { id: 2, taskitem: 'Work on project' },
    { id: 3, taskitem: 'Study for school' }
  ];


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
      <main>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/todolist' element={<ToDoList tasks={tasks} />} />
              <Route path='/todolist/:postid' element={<ToDoList tasks={tasks} />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
