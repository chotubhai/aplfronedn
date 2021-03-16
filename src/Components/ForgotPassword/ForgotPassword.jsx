import React , {Component} from 'react'
import Button from '../Common/Button/Button'
import Label from '../Common/Label/Label'
import {Link} from 'react-router-dom'
import Input from '../Common/Input/Input'
import FormContainer from '../Common/FormContainer/FormContainer'
import axios from 'axios'
import {apiUrl} from '../../config.json'
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
         
    }
    
    render(){
        return(
            <FormContainer className="form-card" heading={"Forgot Your Password ?"}>
                <p className="form-p">Please enter the e-mail address you use 
                    when creating your account, we’ll send you
                    instructions to reset your password.
                </p>
                <form>
                    <div className="form-group" style={{marginBottom: "80px"}}>
                        <Label>Email</Label>
                        <Input 
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>  
                    <Button onClick={this.handleSubmit}>Send</Button>
                     
                </form> 
            </FormContainer>
        )
    }
}
export default Login