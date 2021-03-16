import React from 'react'
import './Input.css'

function Input(props) {
    return(
        <input 
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder} 
            onChange={(e) => props.onChange(e) ? props.onChange(e) : {}}
            className="my-input"
        />
    )
}
export default Input