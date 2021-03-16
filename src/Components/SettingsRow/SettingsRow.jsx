import React from 'react'
import './SettingsRow.css'

function SettingsRow(props) {
    return(
        <div className="flex settings-row">
            <p>{props.placeholder}</p>
            <input  
                type={props.type ? props.type : 'text'}
                name={props.name ? props.name : 'input'}
                placeholder={props.placeholder}
                defaultValue={props.value} 
                onChange={(e) =>  props.onChange(e) }
                className="settings-input"
            />
        </div>
    )
}
export default SettingsRow