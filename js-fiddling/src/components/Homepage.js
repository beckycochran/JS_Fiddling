import logo from '../logo.svg';
import '../App.css';
import { useState, useEffect } from 'react';

const Homepage = ({isNameSubmitted, setIsNameSubmitted}) => {
  useEffect(() => {}, [isNameSubmitted])
  const [text, setText] = useState("")

  const handleChange = ev => {
    const value = ev.target.value;
    setText(value)
  }
  const handleSubmit = ev => {
    console.log(ev, "event")
    ev.preventDefault()
    setIsNameSubmitted(true)
    console.log("submitted")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isNameSubmitted &&
          <>
            <p>
              Welcome human. Enter your name.
            </p>
            <form>
              <input type="text" onChange={handleChange} />
              <button type="submit" disabled={!text} onSubmit={handleSubmit}>Submit</button>
            </form>
          </>
        }
        {isNameSubmitted &&
          <div>Your name is {text}.</div>
        }
      </header>
    </div>
  );
}

export default Homepage;
