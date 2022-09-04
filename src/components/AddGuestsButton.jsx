import React from 'react'

const AddGuestsButton = ({counterGuests, setCounterGuests}) => {


    const handleCounterAddClick = () => {
        setCounterGuests(counterGuests + 1);
    };

    const handleCounterRemoveClick = () => {
        if (counterGuests !== 0) {
        setCounterGuests(counterGuests - 1);
        } else {
        setCounterGuests(0);
        }
        console.log(counterGuests);
    };

    return (
        <>
        <span
            className="material-symbols-outlined"
            onClick={handleCounterRemoveClick}
        >
            indeterminate_check_box
        </span>
        <p>{counterGuests}</p>
        <span
            className="material-symbols-outlined"
            onClick={handleCounterAddClick}
        >
            add_box
        </span>
        </>
    );
};

export default AddGuestsButton