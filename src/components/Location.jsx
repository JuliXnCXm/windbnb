import React from 'react'

const Location = ({location}) => {
  return (
    <div className="searcherContainer__item">
      <span class="material-symbols-outlined" id="location_item">
        location_on
      </span>
      <span id="location">{location}</span>
    </div>
  );
}

export default Location