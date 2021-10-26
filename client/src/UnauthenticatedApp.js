import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Route, Switch } from 'react-router-dom'


function UnauthenticatedApp({ setCurrentUser }) {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path="/signup">
                    <SignUp setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </div>
    )
}

export default UnauthenticatedApp
