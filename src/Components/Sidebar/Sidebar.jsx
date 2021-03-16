import React from 'react'
import './Sidebar.css'
import Logo from '../../Assets/Logo.svg'
import home from '../../Assets/home.svg'
import room from '../../Assets/room.svg'
import create from '../../Assets/create.svg'
import manual from '../../Assets/manual.svg'
import settings from '../../Assets/settings.svg'
import logout from '../../Assets/logout.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Sidebar(){
    function handleLogout(){
        localStorage.clear()
        window.open('/', "_self")
    }
    return(
        <div className="sidebar sidebar-grid">
            <div className="sidebar-logo">
                <img src={Logo} />
            </div>
            <div className="sidebar-grid" style={{position:"relative", top: "-80px"}}>
                <Link to="/home"><div className="sidebar-element">
                    <img src={home} />
                    <p>Home</p>
                </div></Link>
                <div className="sidebar-element">
                    <img src={room} />
                    <p>Room</p>
                </div>
                <div className="sidebar-element">
                    <img src={create} />
                    <p>Create</p>
                </div>
                <div className="sidebar-element">
                    <img src={manual} />
                    <p>Manual</p>
                </div>
            </div>
            <div className="sidebar-grid">
                <Link to="/settings"><div className="sidebar-element">
                    <img src={settings} />
                    <p>Settings</p>
                </div></Link>
                <div className="sidebar-element" onClick={handleLogout}>
                    <img src={logout} />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar