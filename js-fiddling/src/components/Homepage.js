import logo from '../logo.svg';
import '../App.css';
import { useState, useContext } from 'react';
import { UserContext } from '../Context';

const Homepage = () => {
  const { user, setUser } = useContext(UserContext)
  const [text, setText] = useState("")

  const handleChange = ev => {
    const value = ev.target.value;
    setText(value)
  }
  const handleSubmit = ev => {
    setUser({ ...user, name: text })
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
          <button type="submit" disabled={!text} onSubmit={handleSubmit}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default Homepage;
