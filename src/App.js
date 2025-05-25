
import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import ToDoList from './components/ToDoList/ToDoList';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="navbarcontainer d-flex align-items-center">
              <div className="container position-relative d-flex align-items-center justify-content-between">
              <h1 className="mysitebrandname">My Task Management App</h1>
              <nav id="navmenu" className="navmenu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li>
                        <form  className="form-search" id="searchForm" >
                            <label>
                                Search:
                                <input type="text" name="search" id="searchInput" required />
                            </label>
                            <button className="btn-search" type="submit">Search</button>
                        </form>
                    </li>
                  </ul>
              </nav>
    
              </div>
      
          </div>

            <h2>Task Management App</h2>
            <ul>
              <li><Link to="/todolist">To do list</Link></li>
            </ul>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/todolist' element={<ToDoList />} />
              <Route path='/todolist/:postid' element={<ToDoList />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
