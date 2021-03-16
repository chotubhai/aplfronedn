import React from 'react' 
import Card from '../../Common/Card/Card'

function RoomCard(){
    
    return(
        <Card>
            <h1 style={{padding: "0px 40px "}} className="flex">
                <span>Rooms</span>
                <span>Games Won</span>
            </h1>
            <div className="line"></div>
            <h2 style={{padding: "0px 40px ", marginTop:"80px"}} className="flex">
                <span>Public</span>
                <span>7/20</span>
            </h2>
            <h2 style={{padding: "0px 40px "}} className="flex">
                <span>Private</span>
                <span>8/10</span>
            </h2>
        </Card>
    )
}
export default RoomCard