import React, { useState, useEffect } from 'react'
import baseUrl from '../api/baseUrl'
import DogCard from './DogCard'


function Dogs() {

    const [dogs, setDogs] = useState([])

    useEffect(() => {
        const fetchDogs = async () => {
            const response = await baseUrl.get('/dogs')
            setDogs(response.data)
        }
        fetchDogs()
    }, [])

    const showDogs = () => {
        return dogs.map(dog => {
            return <DogCard key={dog.id} dog={dog} />
        })
    }

    return (
        <div>
          {showDogs()} 
        </div>
    )
}

export default Dogs
