import Homepage from './components/Homepage';
import Greeting from './components/Greeting';
import { UserContext } from './Context';
import { useState } from 'react';

const App = () => {
 const UserProvider = ({children}) => {
    const [user, setUser] = useState({
       name: ""
    })
   }
   

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Greeting />
      {!user.name && <Homepage />}
    </UserContext.Provider>
  );
}

export default App;
