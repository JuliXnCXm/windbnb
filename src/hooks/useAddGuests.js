import React from 'react';

const useAddGuests = () => {
    const [counterGuestsChildren, setCounterGuestsChildren] = React.useState(0);
    const [counterGuestsAdults, setCounterGuestsAdults] = React.useState(0);

    const handleSetChildren = (value) => {
        setCounterGuestsChildren(value)
    }

    const handleSetAdults = (value) => {
        setCounterGuestsAdults(value);
    }

    return {
        handleSetAdults,
        handleSetChildren,
        counterGuestsAdults,
        counterGuestsChildren,
        setCounterGuestsAdults,
        setCounterGuestsChildren,
    };
}


export default useAddGuests