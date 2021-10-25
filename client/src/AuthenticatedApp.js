import React from 'react'
import baseUrl from './api/baseUrl'
import Navibar from './components/Navibar'
import App from './App'

function AuthenticatedApp({ setCurrentUser, currentUser }) {

    const handleLogOut = () => {
        baseUrl.delete('logout')
        .then((statusText) => {
            if (statusText === 'OK') {
                setCurrentUser(null)
            }
        })
    }


    return (
        <div>
            <Navibar handleLogOut={handleLogOut} />
        </div>
    )
}

export default AuthenticatedApp
