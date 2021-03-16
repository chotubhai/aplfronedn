import React from 'react';
import './PlayerCard.css'
import Player from '../../Assets/player.svg'
import Clock from '../../Assets/clock.svg'

function PlayerCard(props){

    return(
        <div className="player-card">
            <div className="player-name">
                Sachin Tendulkar
            </div>
            <div className="player-image">
                <img src={Player}/>
            </div> 
            <div className="desc-row"></div>
            <div className="desc-row"></div>
            <div className="desc-row"></div>
            <div className="flex">
                <div className=" player-card-button">
                    last Bid : 100
                </div>  
                <div className=" player-card-button">
                    <img src={Clock} /> 0.09
                </div>
            </div>
        </div>
    )
}
export default PlayerCard