import React from 'react'
import PageContainer from '../../Components/Common/PageContainer/PageContainer'
import RoomSlider from '../../Components/RoomSlider/RoomSlider'
function HomePage(){
    let userData = JSON.parse(localStorage.getItem('iplUser'))
    const userName = userData.username
    const paidRoom = [
                        {
                            img:"https://ik.imagekit.io/hbj42mvqwv/bca_4b_portrait_with_bg_APooOJ1n-.png",
                            link: "https://ik.imagekit.io/hbj42mvqwv/bca_4b_portrait_with_bg_APooOJ1n-.png"
                        },
                        {
                            img:"https://ik.imagekit.io/hbj42mvqwv/ACO_ogobalvcS.png",
                            link: "https://ik.imagekit.io/hbj42mvqwv/ACO_ogobalvcS.png"
                        },
                        {
                            img:"https://ik.imagekit.io/hbj42mvqwv/signup_OOfhjIdDd.jpg",
                            link: "https://ik.imagekit.io/hbj42mvqwv/signup_OOfhjIdDd.jpg"
                        },
                        {
                            img:"https://ik.imagekit.io/hbj42mvqwv/girl_ToUa4SY5n.jpg",
                            link: "https://ik.imagekit.io/hbj42mvqwv/girl_ToUa4SY5n.jpg"
                        },
                        {
                            img:"https://ik.imagekit.io/hbj42mvqwv/ACO_ogobalvcS.png",
                            link: "https://ik.imagekit.io/hbj42mvqwv/ACO_ogobalvcS.png"
                        },
                        {
                            img:"https://ik.imagekit.io/hbj42mvqwv/signup_OOfhjIdDd.jpg",
                            link: "https://ik.imagekit.io/hbj42mvqwv/signup_OOfhjIdDd.jpg"
                        },
                        {
                            img:"https://ik.imagekit.io/hbj42mvqwv/girl_ToUa4SY5n.jpg",
                            link: "https://ik.imagekit.io/hbj42mvqwv/girl_ToUa4SY5n.jpg"
                        }
                    ]
    const freeRoom = [ 
        {
            img:"https://ik.imagekit.io/hbj42mvqwv/ACO_ogobalvcS.png",
            link: "https://ik.imagekit.io/hbj42mvqwv/ACO_ogobalvcS.png"
        },
        {
            img:"https://ik.imagekit.io/hbj42mvqwv/bca_4b_portrait_with_bg_APooOJ1n-.png",
            link: "https://ik.imagekit.io/hbj42mvqwv/bca_4b_portrait_with_bg_APooOJ1n-.png"
        },
        {
            img:"https://ik.imagekit.io/hbj42mvqwv/signup_OOfhjIdDd.jpg",
            link: "https://ik.imagekit.io/hbj42mvqwv/signup_OOfhjIdDd.jpg"
        },
        {
            img:"https://ik.imagekit.io/hbj42mvqwv/girl_ToUa4SY5n.jpg",
            link: "https://ik.imagekit.io/hbj42mvqwv/girl_ToUa4SY5n.jpg"
        },
        {
            img:"https://ik.imagekit.io/hbj42mvqwv/ACO_ogobalvcS.png",
            link: "https://ik.imagekit.io/hbj42mvqwv/ACO_ogobalvcS.png"
        },
        {
            img:"https://ik.imagekit.io/hbj42mvqwv/signup_OOfhjIdDd.jpg",
            link: "https://ik.imagekit.io/hbj42mvqwv/signup_OOfhjIdDd.jpg"
        },
        {
            img:"https://ik.imagekit.io/hbj42mvqwv/girl_ToUa4SY5n.jpg",
            link: "https://ik.imagekit.io/hbj42mvqwv/girl_ToUa4SY5n.jpg"
        }
    ]
    return(
        <PageContainer pageHeader={`Hey ${userName} !`}> 
            <RoomSlider data={paidRoom} heading="Paid Rooms" />
            <RoomSlider data={freeRoom} heading="Free Rooms" />
        </PageContainer>
    )
}
export default HomePage