import React, { useState } from 'react'
import './RoomSlider.css' 
import A_Left from '../../Assets/a-left.svg'
import A_Right from '../../Assets/a-right.svg'
function RoomSlider(props) {
    const [currentX, setCurrentX] = useState('0')
    const moveSliderRight =() =>{
        document.getElementById(`slider-${props.heading}`).scrollTo(`${currentX+400}`, 0)
        setCurrentX(currentX+400)
    }
    const moveSliderLeft =() =>{
        document.getElementById(`slider-${props.heading}`).scrollTo(`${currentX-400}`, 0)
        setCurrentX(currentX-400)
    }

    return(
        <div className="room-slider">
            <div className="flex">
                <span><h2>{props.heading}</h2></span>
                <span>
                    <img src={A_Left} onClick={moveSliderLeft} />
                    <img src={A_Right} onClick={moveSliderRight} />
                </span>
            </div>
            
            <div className="slider" id={`slider-${props.heading}`} >
                {
                    props.data.map((data, i) => {
                        return(
                            
                            <div className="gallery-cell carousel-ele">
                                <a href={data.link}>
                                    <img src={data.img} />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default RoomSlider