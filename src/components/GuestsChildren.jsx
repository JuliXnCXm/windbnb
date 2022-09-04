import React from 'react'
import AddGuestsButton from './AddGuestsButton';

const GuestsChildren = ({ handleSetChildren, counterGuestsChildren}) => {

  window.sessionStorage.setItem("childrenCount", counterGuestsChildren)
  return (
    <div>
      <div id="guests__title">
        <h4>
          <strong>Children</strong>
        </h4>
        <span>Ages 2-12</span>
      </div>
      <div id="guests__buttons">
        <AddGuestsButton
          counterGuests={counterGuestsChildren}
          setCounterGuests={handleSetChildren}
        />
      </div>
    </div>
  );
};

export default GuestsChildren