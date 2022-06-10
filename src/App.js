import React, { useState } from "react";
import MissionCard from "./MissionCard";
import './App.css';
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
 {
    launchesPast(limit:200){
      mission_name
      launch_date_local
      launch_site {
        site_name_long
        site_name
      }
      rocket {
        rocket_name
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
 }
`;

function App() {
  const {data, loading, error} = useQuery(FILMS_QUERY)

  if(loading) return <div className="loading">Fetching Data...</div>
  if(error) return <div className="error">{error.message}</div>

  return (
    <div id="container">
        {data.launchesPast.map((launch) => (
            <MissionCard launch={launch} />
        ))}
    </div>
  );
}

export default App;
