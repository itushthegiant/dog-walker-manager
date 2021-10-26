import React, { useState } from 'react'
import baseUrl from '../api/baseUrl'
import { Card, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'



function Login({ setCurrentUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        baseUrl.post('login', {
            username,
            password
        })
            .then((data) => {
                if (data.status === 200) {
                    setCurrentUser(data)
                    history.push('/')
                }
            })  
    }


    return (
        <div className="login-card">
            <Card className="mt-3" style={{ width: '18rem' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={username} type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
