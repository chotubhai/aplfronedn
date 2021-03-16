import React , {Component} from 'react'
import ForgotPassword from '../../Components/ForgotPassword/ForgotPassword'

class ForgotPasswordPage extends Component{
    
    render(){
        return(
            <div className="form-page">
                <ForgotPassword history={this.props.history}/>
            </div>
        )
    }
}
export default ForgotPasswordPage