
import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import ToDoList from './components/ToDoList/ToDoList';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
            </div>
            <div className="languages d-none d-md-flex align-items-center">
            </div>
          </div>
        </div>

        <div className="navbarcontainer d-flex align-items-center">

            <div className="container position-relative d-flex align-items-center justify-content-between">
                <h1 className="mysitebrandname">My Giphy Search</h1>
    
            <nav id="navmenu" className="navmenu">
            <Router>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </Router>
                <ul>
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
       <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todolist">To do list</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
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
