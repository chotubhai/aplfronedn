import React from 'react';
import PlayerCard from '../../PlayerCard/PlayerCard'
import './PlayerCards.css' 

function PlayerCards(props){

    return(
        <div className="player-cards">
            <div className="back-left">
                <PlayerCard/>
            </div>
            <div className="front-center">
                <PlayerCard/>
            </div>
            <div className="back-right">
                <PlayerCard/>
            </div>
        </div>
    )
}
export default PlayerCards