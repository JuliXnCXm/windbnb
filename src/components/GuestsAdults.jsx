import React from 'react'
import '../styles/GuestsAdults.css'
import AddGuestsButton from './AddGuestsButton';

const GuestsAdults = ({ handleSetAdults, counterGuestsAdults }) => {

  window.sessionStorage.setItem("AdultCount", counterGuestsAdults);

  return (
    <div className="GuestsAdultsContainer">
      <div className="GuestsAdultsContainer--title" id="guests__title">
        <h4>
          <strong>Adults</strong>
        </h4>
        <span>Ages 13 or above</span>
      </div>
      <div className="GuestsAdultsContainer--buttons" id="guests__buttons">
        <AddGuestsButton
          counterGuests={counterGuestsAdults}
          setCounterGuests={handleSetAdults}
        />
      </div>
    </div>
  );
};

export default GuestsAdults