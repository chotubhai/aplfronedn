import React from 'react'
import './WalletBar.css'

function WalletBar(orops){
    const userImg = "https://ik.imagekit.io/hbj42mvqwv/95136161_2314381235529760_7156256645826215936_n_gNRPFl-ED.jpg"
    return(
        <div className="wallet-bar flex">
            <img src={userImg} />
            <div className="flex">
                <p>wallet</p>
                <p>Rs 1000</p>
            </div> 
        </div>
    )
}
export default WalletBar