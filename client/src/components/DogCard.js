import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function DogCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.dog.img_url} />
                <Card.Body>
                    <Card.Title>{props.dog.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Breed: {props.dog.breed}</ListGroupItem>
                    <ListGroupItem>Age: {props.dog.age} yo</ListGroupItem>
                    <ListGroupItem>Owner Name: {props.dog.owner_name}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Delete</Card.Link>
                    <Card.Link href="#">Edit</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DogCard
