import React , {Component} from 'react'
import Login from '../../Components/Login/Login'

class LoginPage extends Component{
    
    render(){
        return(
            <div className="form-page">
                <Login history={this.props.history}/>
            </div>
        )
    }
}
export default LoginPage