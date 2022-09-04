import React from 'react'
import {data} from '../data.js'
import '../styles/Stays.css'
import ImageComponent from './ImageComponent.jsx'

const Stays = ({rooms, choice}) => {

    return (
        <div className="container">
            <div className="stayContainer">
                <div className="stayContainer__titles">
                    <h1>Stays in {choice}</h1>
                    <span>12+ stays</span>
                </div>
                <div className="stayList">
                    {data.filter(stay => {
                        return stay.location === choice && stay.rooms >= rooms
                    })
                    .map((stay, idx) =>{
                        return (
                            <div key={idx}>
                                <ImageComponent stay={stay}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Stays