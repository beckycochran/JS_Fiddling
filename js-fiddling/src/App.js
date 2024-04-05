import Greeting from './components/Greeting';
import Homepage from './components/Homepage';
import { useState } from 'react';

const App = () => {
  const [isNameSubmitted, setIsNameSubmitted] = useState(false)

  return (
      // <Greeting />
    <Homepage 
      isNameSubmitted={isNameSubmitted}
    />
  );
}

export default App;
