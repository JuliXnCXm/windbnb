import './App.css';
import { useEffect, useState } from "react";
import Header from './components/Header'
import Stays from './components/Stays'

function App() {

  const [rooms, setRooms] = useState(0)
  const [choice, setChoice] = useState("Helsinki, Finland");

  useEffect(() => {
    if (sessionStorage.getItem("rooms") || sessionStorage.getItem("rooms") !== undefined) {
      setRooms(sessionStorage.getItem("rooms"))
    } else {
      setRooms(0)
    }
    if (sessionStorage.getItem("query") || sessionStorage.getItem("query") !== undefined ){
      setChoice(sessionStorage.getItem("query"));
    } else {
      sessionStorage.setItem("query",choice);
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
