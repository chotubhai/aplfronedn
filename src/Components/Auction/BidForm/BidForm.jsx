import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './BidForm.css'

class BidForm extends Component{

    render(){
        return(
            <div className="bid-form">
                <form>
                    <div className="bid-input">
                        BID
                        <input placeholder="Rs Amount" type="text"/>
                    </div>
                    <div className='flex'>
                        <div>Fold</div>
                        <div>Extra Time</div>
                    </div>
                    <button className="bid-btn">Bid</button>
                </form>
            </div>
        )
    }
}
export default BidForm