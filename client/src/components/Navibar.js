import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

function Navibar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <FontAwesomeIcon icon={faDog} className="dog-icon" />Dog Walker Manager
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navibar
