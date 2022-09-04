import React from 'react'

const ImageComponent = ({stay}) => {
    return (
        <div className="stay">
        <img className="stay--image" src={stay.imgSource} alt={stay.title} />
        <div className="stay--info">
            <div className="stay--info__content">
            {stay.isSuperHost ? (
                <div className="superHost">SUPER HOST</div>
            ) : null}
            <h3>{stay.type}</h3>
            </div>
            <div className="stay--rating">
            <span className="material-symbols-outlined" id="star--icon">
                star
            </span>
            <h3>{stay.rating}</h3>
            </div>
        </div>
        <h1>{stay.title}</h1>
        </div>
    );
}

export default ImageComponent