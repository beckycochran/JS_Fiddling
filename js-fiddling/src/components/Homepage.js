import logo from '../logo.svg';
import '../App.css';
import { useState, useEffect } from 'react';

const Homepage = () => {
    const [myName, setMyName] = useState("");
    const handleChange = ev => {
      const value = ev.target.value;
      setMyName(value)
    }
    const handleSubmit = ev => {
      
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome human. Enter your name.
          </p>
          <form>
            <input type="text" onChange={handleChange} />
            <button type="submit" disabled={!myName}>Submit</button>
          </form>
        </header>
      </div>
    );
  }
  
  export default Homepage;
  