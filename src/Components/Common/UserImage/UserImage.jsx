import React from 'react'
import './UserImage.css'

function UserImage({img,name, onClick}){
    return( <div className="user-image-holder" onClick={onClick}>
        <div 
            className="user-img"
            style={{backgroundImage : `url(${img})`}}    
        ></div>
        <p className="user-name">{name}</p>
    </div>)
}
export default UserImage