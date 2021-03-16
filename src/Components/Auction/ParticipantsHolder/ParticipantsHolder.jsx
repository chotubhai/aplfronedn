import React from 'react'
import './ParticipantsHolder.css'
import UserImage from '../../Common/UserImage/UserImage'
function ParticipantsHolder(){
    const participants = [
        {
            img: "https://ik.imagekit.io/hbj42mvqwv/manik_photo_7QX-K2zve.jpeg",
            name:"Manik"
        },
        {
            img: "https://ik.imagekit.io/hbj42mvqwv/aayush_photo_2fgjfzuIvz.jpg",
            name:"Aayush"
        },
        {
            img: "https://ik.imagekit.io/hbj42mvqwv/mohak_photo_square_AKyumygOx.jpg",
            name:"Mohak"
        },
        {
            img: "https://ik.imagekit.io/hbj42mvqwv/95136161_2314381235529760_7156256645826215936_n_gNRPFl-ED.jpg",
            name:"Kamal"
        }
    ]
    return(
        <div className="participant-holder">
            {
                participants.map((participant, i) =>{
                    return <UserImage img={participant.img} name={participant.name} key={i} />
                })
            }
        </div>
    )
}
export default ParticipantsHolder