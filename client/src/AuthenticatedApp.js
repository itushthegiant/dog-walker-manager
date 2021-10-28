import React from 'react'
import AddADog from './components/AddADog'
import baseUrl from './api/baseUrl'
import Navibar from './components/Navibar'
import Dogs from './components/Dogs'
import { useHistory, Switch, Route } from 'react-router-dom'

function AuthenticatedApp({ setCurrentUser, currentUser }) {

    const history = useHistory()

    const handleLogOut = async () => {
        const res = await baseUrl.delete('logout')
        if (res.status === 204) {
            setCurrentUser(null)
            history.push('/')
        }
    }


    return (
        <div>
            <Navibar handleLogOut={handleLogOut} />
            <Switch>
                <Route exact path="/dogs">
                    <Dogs />
                </Route>
                <Route exact path="/add-dog">
                    <AddADog />
                </Route>
            </Switch>
        </div>
    )
}

export default AuthenticatedApp
