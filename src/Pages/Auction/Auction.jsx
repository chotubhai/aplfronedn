import react, { Component } from 'react'
import PlayerCards from '../../Components/Auction/PlayerCards/PlayerCards'
import Deck from '../../Components/Auction/Deck/Deck'
import BidForm from '../../Components/Auction/BidForm/BidForm' 
import WalletBar from '../../Components/Auction/WalletBar/WalletBar'
import CloseBtn from '../../Components/Common/CloseBtn/CloseBtn'
// import socketIOClient from "socket.io-client";
import ParticipantsHolder from '../../Components/Auction/ParticipantsHolder/ParticipantsHolder'
import './Auction.css'
import {apiUrl} from '../../config.json'
import  io  from "socket.io-client";
class AuctionPage extends Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){ 
        let roomId = '6050bae7739caa0e346440ae'
        let userId = '604c9b426dea7a349800cc2b'
        const socket = io(`http://localhost:8000/auction`);
        socket.emit('join-room', {roomId, userId})  
        socket.on('userJoined', data =>{
            console.log(data)
        }) ;

        socket.emit("startAuction",{roomId, userId});

    }

    onbid(){

    }

    render(){
        return(
            <div className="action-page">
                <div className="flex">
                    <CloseBtn />
                    <WalletBar/>
                    <div></div>
                </div> 
                <ParticipantsHolder/>
                <div className="flex" style={{justifyContent: 'space-evenly'}}>
                    <div className="auction-page-flex-left">
                        <PlayerCards/> 
                        <BidForm onbid/>
                    </div>
                    <div>
                        <Deck /> 
                    </div>
                </div>
            </div>
        )
    }
}
export default AuctionPage