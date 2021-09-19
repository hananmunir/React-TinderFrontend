    import React, {useState, useEffect} from 'react'
import axios from './axios'
import TinderCard from 'react-tinder-card'
import './Cards.css'

function Cards() {

    const [people, setPeople] = useState([ ])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/cards')

            setPeople(req.data)
        }

        fetchData();
        
    }, [])

    const swiped = (direction,nameToDisplay) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className = "cards">
            <div className = "cards-container">
                 {people.map( (person) => {
                     return ( <>
                         <TinderCard
                             className="swipe"
                             key={person.name}
                             onSwipe={(dir) => swiped(dir, person.name)}
                             onCardLeftScreen={() => onCardLeftScreen(person.name)}
                             preventSwipe={['up', 'down']}>
                             <div className="card"
                                 style={{ backgroundImage: `url(${person.imgURL}) ` }}
                             >
                                 <h3>{person.name}</h3>
                             </div>
                         </TinderCard>
                     </>)
                    
                })}

            </div>
          
        </div>
    )
}

export default Cards
