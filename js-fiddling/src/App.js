import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome human. Enter your name.
        </p>
        <input type="text" />
        </header>
    </div>
  );
}

export default App;
