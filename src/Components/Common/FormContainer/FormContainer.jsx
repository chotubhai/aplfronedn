import React from 'react'
import './FormContainer.css'

function FormContainer(props){

    return(
        <div className="form-card">
            <div className="row">
                <center><img src="https://ik.imagekit.io/hbj42mvqwv/favicon_9aiWRECIB.png" className="form-logo" alt="logo" /></center>
            </div>
            <h2>{props.heading}</h2>
            <div className="form-container">
                {props.children}
            </div>
        </div>
    )
}
export default FormContainer