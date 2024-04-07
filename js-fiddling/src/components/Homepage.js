import logo from '../logo.svg';
import '../App.css';
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [isNameSubmitted, setIsNameSubmitted] = useState(false)
  const [text, setText] = useState("")

  // useEffect(() => { }, [isNameSubmitted])

  const handleChange = ev => {
    const value = ev.target.value;
    setText(value)
  }
  const handleSubmit = ev => {
    // ev.preventDefault()
    setIsNameSubmitted(true)
    console.log("submitted")
  }

  const handleResetButton = ev => {
    setIsNameSubmitted(false)
    setText("")
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
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} />
              <button type="submit" disabled={!text} >Submit</button>
            </form>
          </>
        }
        {isNameSubmitted &&
          <span className="App-declaration">
            <div>Your name is {text}.</div>
            <button onClick={handleResetButton}>Reset</button>
          </span>
        }
      </header>
    </div>
  );
}

export default Homepage;
