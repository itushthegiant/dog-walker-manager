import React, { useState } from 'react'
import baseUrl from '../api/baseUrl'
import { Card, Button, Form } from 'react-bootstrap'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        baseUrl.post('signup', {
            username,
            password,
            passwordConfirmation
        })
    }
    return (
        <div>
              <Card className="mt-3" style={{ width: '18rem' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={username} type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control value={passwordConfirmation} type="password" placeholder="Password" onChange={(e) => setPasswordConfirmation(e.target.value)} required />
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

export default SignUp
