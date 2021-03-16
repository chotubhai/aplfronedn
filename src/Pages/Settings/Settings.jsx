import React, { Component } from 'react'
import PageContainer from '../../Components/Common/PageContainer/PageContainer'
import SettingsRow from '../../Components/SettingsRow/SettingsRow'
import Button from '../../Components/Common/Button/Button'
class Settings extends Component{ 
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        let userData = JSON.parse(localStorage.getItem('iplUser'))
        return(
            <PageContainer pageHeader={"Settings"}>
                <SettingsRow placeholder="Change Email" onChange={(e) => this.handleChange(e)} name="email" type="text" value={userData.email} />
                <SettingsRow placeholder="Change Username" onChange={(e) => this.handleChange(e)} name="username" type="text" value={userData.username} />
                <SettingsRow placeholder="Change Password" onChange={(e) => this.handleChange(e)} name="password" type="password" value={"password"} />
                <Button className="red-button">Suspend Account</Button>
            </PageContainer>
        )
    }
}
export default Settings