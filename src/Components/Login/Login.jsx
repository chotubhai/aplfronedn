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
            email: '',
            password: '',
            errorMessage: ''
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
        axios
            .post(`${apiUrl}/auth/login`, this.state)
            .then(res => {
                console.log(res)
                if(res.status === 200){
                    localStorage.setItem('iplUser', JSON.stringify(res.data.user))
                    this.props.history.history.push('/home')
                }
                else{
                    this.setState({
                        errorMessage : res.data.message
                    })
                }
            })
    }
    handleGoogleAuth = (e) =>{
        e.preventDefault()
        axios  
            .get(`${apiUrl}/google`)
            .then(res => console.log(res))
    }
    render(){
        return(
            <FormContainer className="form-card" heading={"Login"}>
                <form>
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
                    </div>
                    <p className="error-message">{this.state.errorMessage}</p>
                    <Button onClick={this.handleSubmit}>Login</Button>
                    <Link to="/reset">Forgot Password</Link>
                    <p className="or-div"> 
                        Or 
                    </p>
                    <Button onClick={this.handleGoogleAuth}>
                        Continue with Google
                    </Button>
                    <Link to="/signup">
                        Don’t have an account ? <span>signup now</span>
                    </Link>
                </form> 
            </FormContainer>
        )
    }
}
export default Login