
import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import ToDoList from './components/ToDoList/ToDoList';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
