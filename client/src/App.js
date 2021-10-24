import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navibar from './components/Navibar'
import Login from './components/Login'
import Dogs from './components/Dogs'
import SignUp from './components/SignUp'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)


  return (
    <div className="App">
      <Router>
        <Navibar />
        <Switch>
          <Route exact path='/' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
