import React from 'react'
import DropdownLocations from './DropdownLocations';
import '../styles/SearcherContainerLocations.css'
import useLocations from '../hooks/useLocations';

const SearchContainerLocations = ({
    width,
    breakpoint,
}) => {

    const { setQuery,query,handleSelectChoice,filteredLocations,
    locations} = useLocations();

    return (
        <div className="searcherContainer--locations">
            <span className="searcherContainer--locations__title">LOCATION</span>
            <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            id="input_locations"
            className="searcherContainer--locations__input"
            placeholder="Helsinki, Finland"
            value={query}
            />
            {width > breakpoint ? (
            <DropdownLocations
                handleSelectChoice={handleSelectChoice}
                filteredLocations={filteredLocations}
                locations={locations}
                query={query}
            />
            ) : (
            <></>
            )}
        </div>
    );
};

export default SearchContainerLocations