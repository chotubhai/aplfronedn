import React from 'react' 
import Card from '../../Common/Card/Card'

function RoomCard(){
    
    return(
        <Card>
            <h1 style={{padding: "0px 40px "}} className="flex">
                <span>Achievements</span>
                <span>Games Won</span>
            </h1> 
            <h1 style={{padding: "0px 40px "}} className="flex">
                <span>Rank</span>
                <span>7652/20000</span>
            </h1>
            <h1 style={{padding: "0px 40px "}} className="flex">
                <span>Avatars</span>
                <span>8/10</span>
            </h1>
            <h1 style={{padding: "0px 40px "}} className="flex">
                <span>Themes</span>
                <span>8/10</span>
            </h1>
        </Card>
    )
}
export default RoomCard