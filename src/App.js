import './App.css';
import { useEffect, useState } from "react";
import Header from './components/Header'
import Stays from './components/Stays'

function App() {

  const [rooms, setRooms] = useState(0)
  const [choice, setChoice] = useState("Helsinki, Finland");

  useEffect(() => {
    if (window.sessionStorage.getItem("rooms") && window.sessionStorage.getItem("rooms") !== undefined) {
      setRooms(window.sessionStorage.getItem("rooms"))
    } else {
      setRooms(0)
      window.sessionStorage.setItem("rooms", 0)

    }
    if (window.sessionStorage.getItem("query") && window.sessionStorage.getItem("query") !== undefined ){
      console.log("query");
      setChoice(sessionStorage.getItem("query"));
    } else {
      window.sessionStorage.setItem("query",choice);
    }
  }, [choice])

  return (
    <div className="App">
      <Header choice={choice} />
      <Stays rooms={rooms} choice={choice} />
    </div>
  );
}

export default App;
