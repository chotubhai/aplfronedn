import React from 'react'
import './ReferalModal.css'
import Button from '../../Common/Button/Button'
import Input from '../../Common/Input/Input'
import Modal from '../../Common/Modal/Modal'
function ReferalModal(props){ 
    return( 
        <div className="edit-profile-modal">
            <Modal setModalShown={props.setModalShown}>
                <h2>Apply Referral Code</h2>
                <div>
                    <Input type="text" placeholder="Enter the Code"/>
                </div>
                <div style={{width: "50%",alignSelf:"flex-end", margin:"40px auto 0 auto"}}>
                    <Button>Done</Button>
                </div>
            </Modal>
        </div>
    ) 
}
export default ReferalModal