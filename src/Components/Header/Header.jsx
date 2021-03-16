import React, { useState } from 'react'
import './Header.css'
import UserImage from '../Common/UserImage/UserImage'
import Logo from "../../Assets/Logo_name.svg"
import Search from "../../Assets/Search.svg"
import {useHistory} from 'react-router-dom'
function Header (props){
    const history =useHistory()
    const userImg = "https://ik.imagekit.io/hbj42mvqwv/95136161_2314381235529760_7156256645826215936_n_gNRPFl-ED.jpg"
    return(<>
        <div className="header">
            <img src={Logo} className="header-logo"/>
            <div className="search-bar">
                <img src={Search} />
                <input type="text" placeholder="Search..." />
            </div> 
            <UserImage img={userImg} onClick={() => history.push('/profile')}/>
        </div>
        <h1>{props? props.pageHeader : ''}</h1>
    </>)
}
export default Header