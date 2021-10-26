import React from 'react'
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
            <Navibar handleLogOut={handleLogOut}  />
            <Dogs />
        </div>
    )
}

export default AuthenticatedApp
