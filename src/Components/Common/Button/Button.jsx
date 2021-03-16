import React from 'react'
import './Button.css'

function Button(props) {
    return(
        <button 
            type="button" 
            onClick={props.onClick}
            className={`my-button ${props.className}`}
            style={props.style}
        >
            {props.children}
        </button>
    )
}
export default Button