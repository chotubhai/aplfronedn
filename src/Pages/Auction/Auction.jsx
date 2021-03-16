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
        this.state = {
            bidderId:'tyut',
            amount: 20
        }
    }   
    componentDidMount(){ 
        let roomId = '6050bae7739caa0e346440ae'
        let userId = '604c9b426dea7a349800cc2b'
        const socket = io(`http://localhost:8000/auction`);
        socket.emit('join-room', {roomId, userId})  
        socket.on('userJoined', data =>{
            console.log(data)
           this.setState({ bidderId : data._id})
        }) ;
        let playerId = 215155
        console.log(this.state.bidderId)
        const bidderId = this.state.bidderId
        socket.emit("startAuction",{roomId, bidderId});
        let bid = document.getElementById('bid')
        bid.addEventListener('click', () => {

            socket.emit('placebid',{roomId, bidderId:this.state.bidderId,bidAmt: this.state.amount, playerId})
            this.setState({amount: this.state.amount +5})
        })
        socket.on("bidPlaced",obj=>{
            console.log(obj)
        })

        socket.on("auction ended",()=>{
            console.log("auction ended")
        })
        socket.on("new player",(obj)=>{
            console.log(obj)
        })
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
                        <button id="bid">BID</button>
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
