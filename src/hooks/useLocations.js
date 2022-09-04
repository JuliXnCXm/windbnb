import {useMemo, useState} from 'react'

const useLocations = () => {

  const locations = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
    "Bogota, Colombia",
    "Medellin, Colombia",
    "Washington, United States",
  ];

  const [query, setQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations)

  useMemo(() => {
      const result = locations.filter((location) => {
        return location.toLowerCase().includes(query);
      });
      setFilteredLocations(result);
  }, [query]);


  const handleSelectChoice = async (choice) => {
    let choice_selected = await choice
    setQuery(choice_selected);
    locations.find((elem) => elem === choice_selected) !== undefined
      ? window.sessionStorage.setItem("query", choice_selected)
      : window.sessionStorage.setItem("query", locations[3]);
  };

  const handleSearch = () => {
    let totalGuests = parseInt(window.sessionStorage.getItem("childrenCount")) + parseInt(window.sessionStorage.getItem("AdultCount"))
    if (totalGuests !== 0) {
      window.sessionStorage.setItem(
        "rooms",
        totalGuests !== 0 ? totalGuests / 2 : 0
      );
    }
    window.location = "/windbnbChallenge";
  }

  return {
    filteredLocations,
    setFilteredLocations,
    query,
    locations,
    setQuery,
    handleSelectChoice,
    handleSearch,
  };
}

export default useLocations