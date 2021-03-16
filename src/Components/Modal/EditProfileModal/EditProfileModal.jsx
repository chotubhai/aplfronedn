import React from 'react'
import './EditProfileModal.css'
import Button from '../../Common/Button/Button'
import Input from '../../Common/Input/Input'
import Modal from '../../Common/Modal/Modal'
function EditProfileModal(props){ 
    return( 
        <div className="edit-profile-modal">
            <Modal setModalShown={props.setModalShown}>
                <div className="flex"> 
                    <img alt="User Image" src={"https://ik.imagekit.io/hbj42mvqwv/95136161_2314381235529760_7156256645826215936_n_gNRPFl-ED.jpg"} />
                    <Button>Change profile photo</Button>
                </div>
                <div>
                    <Input type="text" value="Kamal Nanda"/>
                </div>
                <div style={{width: "50%",alignSelf:"flex-end", margin:"40px auto 0 auto"}}>
                    <Button>Done</Button>
                </div>
            </Modal>
        </div>
    ) 
}
export default EditProfileModal