import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Route, Switch } from 'react-router-dom'
import App from './App'


function UnauthenticatedApp() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </div>
    )
}

export default UnauthenticatedApp
