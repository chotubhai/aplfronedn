import React from 'react' 
import Button from '../../Common/Button/Button'
import Card from '../../Common/Card/Card'
function UserCard({data,setModalShown}){
    
    return(
        <Card>
            <img src={"https://ik.imagekit.io/hbj42mvqwv/95136161_2314381235529760_7156256645826215936_n_gNRPFl-ED.jpg"} />
            <h2>{data.username}</h2>       
            <h3 className="flex">
                <span>Email </span>
                <span style={{width:"80%"}}>{data.email}</span>
            </h3>     
            <h3 className="flex">
                <span>Contact No. </span>
                <span>+212 987-222-7899</span>
            </h3>     
            <Button onClick={() => setModalShown()}>Edit</Button>
        </Card>
    )
}
export default UserCard