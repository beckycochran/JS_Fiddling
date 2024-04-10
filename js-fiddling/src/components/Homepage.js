import { useState } from 'react';

const Homepage = () => {
  const [isNameSubmitted, setIsNameSubmitted] = useState(false)
  const [text, setText] = useState("")


  const handleChange = ev => {
    const value = ev.target.value;
    setText(value)
  }
  const handleSubmit = ev => {
    setIsNameSubmitted(true)
  }
  const handleResetButton = ev => {
    setIsNameSubmitted(false)
    setText("")
  }

  return (
    <>
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
    </>
  );
}

export default Homepage;
