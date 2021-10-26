import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import baseUrl from './api/baseUrl'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await baseUrl.get('/me')
      setCurrentUser(response.data)
    }
    fetchUser()
  }, [])  



  return (
    <Router>
      {currentUser ? 
      (<AuthenticatedApp
      setCurrentUser={setCurrentUser}
      currentUser={currentUser}
       />)
       : 
      (<UnauthenticatedApp
      setCurrentUser={setCurrentUser}
       />)
      }
    </Router>
    
  );
}

export default App;
