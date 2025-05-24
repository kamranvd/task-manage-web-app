
import './App.css';
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import ToDoList from './components/ToDoList/ToDoList';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Task Management App</h2>
       <HashRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todolist">To do list</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/todolist' Component={ToDoList} />
            <Route path='/contacts' Component={Contacts} />
          </Routes>
       </HashRouter>
      </header>
    </div>
  );
}

export default App;
