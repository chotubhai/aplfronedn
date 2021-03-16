import React , {Component} from 'react'
import Button from '../Common/Button/Button'
import Label from '../Common/Label/Label'
import {Link} from 'react-router-dom'
import Input from '../Common/Input/Input'
import FormContainer from '../Common/FormContainer/FormContainer'
import axios from 'axios'
import {apiUrl} from '../../config.json'
class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            username: '',
            password2: '' 
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleGoogleAuth = (e) =>{
        e.preventDefault()
        axios  
            .get(`${apiUrl}/auth/google`)
            .then(res => console.log(res))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post(`${apiUrl}/register`, this.state)
            .then(res => console.log(res))
    }
    render(){
        return(
            <FormContainer heading="Sign Up"> 
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <Label>Username</Label>
                        <Input 
                            type="text"
                            placeholder="Enter your username"
                            name="username"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <Label>Email</Label>
                        <Input 
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <Label>Password</Label>
                        <Input 
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div><div className="form-group">
                        <Label>Confirm Password</Label>
                        <Input 
                            type="password"
                            placeholder="Enter your password again"
                            name="password2"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <Button onClick={this.handleSubmit}>Sign Up</Button>
                    <Link to="/reset">Forgot Password</Link>
                    <p className="or-div"> 
                        Or 
                    </p>
                    <Button onClick={this.handleGoogleAuth}>
                        Sign Up with Google
                    </Button>
                    <a onClick={this.props.setModalShown} style={{color: "var(--secondary-purple)", cursor:"pointer"}}>Have a referal code?</a>
                </form> 
            </FormContainer>
        )
    }
}
export default SignUp