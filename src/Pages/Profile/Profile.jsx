import React , {Component} from 'react'
import UserCard from '../../Components/Profile/UserCard/UserCard'
import RoomCard from '../../Components/Profile/RoomCard/RoomCard'
import InfoCard from '../../Components/Profile/InfoCard/InfoCard'
import EditProfileModal from '../../Components/Modal/EditProfileModal/EditProfileModal'
import PageContainer from '../../Components/Common/PageContainer/PageContainer' 
class HomePage extends Component{ 
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
        let userData = JSON.parse(localStorage.getItem('iplUser'))
        return(<>
            {
                this.state.isModalShown? <EditProfileModal setModalShown={this.setModalShown}/> : (<></>)
            } 
            <PageContainer pageHeader={`Profile`} className={this.state.isModalShown ? "popUpFilter" : ""}>  
                <div className="row">
                    <div className="col-lg-4">
                        <UserCard data={userData} setModalShown={this.setModalShown}/>
                    </div>
                    <div className="col-lg-8">
                        <RoomCard />
                        <InfoCard />
                    </div>
                </div>
            </PageContainer>
        </>)
    }
}
export default HomePage