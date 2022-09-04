import React from 'react'
import GuestsAdults from "./GuestsAdults";
import GuestsChildren from "./GuestsChildren";
import useAddGuests from '../hooks/useAddGuests';

const SearchContainerGuests = ({width , breakpoint}) => {
    const [value, setValue] = React.useState("")

    const {
        counterGuestsChildren,
        counterGuestsAdults,
        handleSetChildren,
        handleSetAdults,
    } = useAddGuests();

    const handleChange = e => {
        const result = e.target.value.replace(/\D/g, '');
        setValue(result)
        window.sessionStorage.setItem('rooms', result/2)
    }

    return (
        <div className="searcherContainer--guests">
            <span className="searcherContainer--guests__title">GUESTS</span>
            <input
            type="text"
            id="input_guests"
            className="searcherContainer--guests__input"
            placeholder={
                counterGuestsChildren + counterGuestsAdults > 0
                ? `Number of Guests ${
                    counterGuestsChildren + counterGuestsAdults
                    }`
                : "Add guests"
            }
            value={value}
            onChange={(e) => handleChange(e)}
            />
            {width > breakpoint ? (
                <div className="searcherContainer__dropdown--guests">
                    <GuestsAdults
                    handleSetAdults={handleSetAdults}
                    counterGuestsAdults={counterGuestsAdults}
                    />
                    <GuestsChildren
                    handleSetChildren={handleSetChildren}
                    counterGuestsChildren={counterGuestsChildren}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default SearchContainerGuests