import React from 'react'
import './Deck.css'
import PlayerImg from '../../../Assets/player-red.svg'

function Player(props) {
    return(
        <div className="deck-player-card">
            <img src={PlayerImg}/>
            <p>Sachin</p>
        </div> 
    )
}

function Deck(props){

    return(
        <div className="deck">
            <h2>My Deck</h2>
            <div className="deck-grid">
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
            </div>
            <h2>Kathy's Deck</h2>
            <div className="deck-grid grid-3">
                <Player />
                <Player />
                <Player />
            </div>
        </div>
    )
}
export default Deck