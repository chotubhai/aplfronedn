import React , {Component} from 'react'
import SignUp from '../../Components/SignUp/SignUp'
import ReferalModal from '../../Components/Modal/ReferalModal/ReferalModal'


class SignUpPage extends Component{
    constructor(props){
        super(props)
        this.state={
            isModalShown: false
        }
    }
    setModalShown = () => {
        this.setState({
            isModalShown : !this.state.isModalShown
        })
    }
    render(){
        return(<>
            {
                this.state.isModalShown? <ReferalModal setModalShown={this.setModalShown}/> : (<></>)
            } 
            <div className={this.state.isModalShown ? "popUpFilter form-page" : "form-page"}>
                <SignUp setModalShown={this.setModalShown}/>
            </div>
        </>)
    }
}
export default SignUpPage