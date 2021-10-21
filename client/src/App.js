import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navibar from './components/Navibar'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Navibar />
        <Switch>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
