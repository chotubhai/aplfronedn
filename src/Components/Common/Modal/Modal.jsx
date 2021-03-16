import React from 'react'
import CloseBtn from '../CloseBtn/CloseBtn'
import './Modal.css'
function Modal(props){ 
    return(
        <div className={`modal`}>
            <div className="modal-close-btn">
                <CloseBtn handleClick={()=> props.setModalShown()}/>
            </div>
            {props.children}
        </div>
    ) 
}
export default Modal