import React from 'react'
import '../styles/Searcher.css'
import SearchContainerGuests from './SearchContainerGuests'
import SearchContainerLocations from './SearchContainerLocations'
import useLocations from '../hooks/useLocations'
import DropdownLocations from './DropdownLocations'


const Searcher = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 480;

        const {
          query,
          handleSelectChoice,
          filteredLocations,
          locations,
          setQuery,
          handleSearch
        } = useLocations();

    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
      <div className="Modal--searcher--container">
        <div className="searcherContainer">
          {width < breakpoint ? (
            <>
              <div className="searcherContainer--locations">
                <span className="searcherContainer--locations__title">
                  LOCATION
                </span>
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
              <SearchContainerGuests width={width} breakpoint={breakpoint} />
              <DropdownLocations
                handleSelectChoice={handleSelectChoice}
                filteredLocations={filteredLocations}
                locations={locations}
                query={query}
              />
            </>
          ) : (
            <>
              <SearchContainerLocations width={width} breakpoint={breakpoint} />
              <SearchContainerGuests width={width} breakpoint={breakpoint} />
            </>
          )}
          <div className="searcherContainer--button">
            <button
              className="searcherContainer__button--search"
              id="search__button"
              onClick={handleSearch}
            >
              <span class="material-symbols-outlined">search</span>
              Search
            </button>
          </div>
        </div>
      </div>
    );
}

export default Searcher