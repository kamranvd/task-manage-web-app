
import './App.css';
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Task Management App</h2>
       <BrowserRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todolist">To do list</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
       </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
