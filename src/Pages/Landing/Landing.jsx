import React , {Component} from 'react' 
import Logo from '../../Assets/Logo.svg'
import Logo2 from '../../Assets/Logo_name.svg'
import Button from '../../Components/Common/Button/Button'
import './Landing.css'
class LandingPage extends Component{
    componentDidMount(){
        setTimeout(()=>{
            if(localStorage.getItem('iplUser'))
                this.props.history.history.push('/home')
            else this.props.history.history.push('/login')
        }, 5000)
    }
    render(){
        return(
            <> 
            <div className="form-page landing">
                <div className="flex" style={{width: "40%"}}>
                    <img src={Logo} style={{width: "50%"}}/>
                    <img src={Logo2} style={{width: "50%"}}/>
                </div>
            </div>
        </>)
    }
}
export default LandingPage