import React from 'react'
import Location from "./Location";
import '../styles/DropdownLocations.css'

const DropdownLocations = ({
    handleSelectChoice,
    filteredLocations,
    locations,
    query
}) => {

    return (
        <div className="searcherContainer__dropdown--locations">
        {filteredLocations.map((location, idx) => {
            return (
            <ul key={idx}>
                <li onClick={() => handleSelectChoice(location)}>
                    <Location location={location} />
                </li>
            </ul>
            );
        })}

        {filteredLocations.length === 0 && (
            <>
            {!Object.is(
                locations.find((el) => el === query),
                query
            ) ? (
                <div className="searcherContainer__noResults">
                    <span class="material-symbols-outlined" id="icon_noresults">
                        explore_off
                    </span>
                    <h3>No Results for this Location</h3>
                </div>
            ) : (
                <li id="selected" onClick={() => handleSelectChoice(query)}>
                    <Location location={query} />
                </li>
            )}
            </>
        )}
        </div>
    );
};

export default DropdownLocations