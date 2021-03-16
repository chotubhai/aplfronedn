import React from 'react'
import './Label.css'

function Label(props) {
    return(
        <label
            className="my-label"
        >
            {props.children}
        </label>
    )
}
export default Label