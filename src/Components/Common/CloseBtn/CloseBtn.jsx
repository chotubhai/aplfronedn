import React from 'react'
import './CloseBtn.css'
import Close from '../../../Assets/close.svg'

function CloseBtn({handleClick}){

    return(
        <div className="leave" onClick={handleClick}>
            <img src={Close}/>
            <div>Leave</div>
        </div>
    )
}
export default CloseBtn