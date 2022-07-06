import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearchWithRef from "./refs/UserSearch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GuestList />
      <hr />
      <UserSearch />
      <hr />
      <EventComponent />
      <hr />
      <UserSearchWithRef />
    </div>
  );
}

export default App;
