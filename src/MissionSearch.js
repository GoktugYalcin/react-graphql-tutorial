import React, { useContext } from "react";
import { SearchContext } from './context/SearchContext';

const MissionSearch = () => {
    const { search, setSearch } = useContext(SearchContext)
    return <>
        <div className="searchContainer">
            <p>SpaceX Missions - GraphQL</p>
            <input onChange={(e) => {setSearch(e.target.value)}} value={search} placeholder="Type for search..." />
        </div>
    </>
}

export default MissionSearch;
