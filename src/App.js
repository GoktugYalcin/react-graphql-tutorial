import React from "react";
import MissionSearch from "./MissionSearch";
import MissionList from "./MissionList";
import './App.css';
import SearchContext from "./context/SearchContext";
const App = () => {

  return (
    <>
        <SearchContext>
            <MissionSearch />
            <MissionList />
        </SearchContext>
    </>
  );
}

export default App;
