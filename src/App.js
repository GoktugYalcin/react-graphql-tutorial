import React from "react";
import './App.css';
import { useQuery, gql } from "@apollo/client";
import moment from 'moment';

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
  if(data) {
    console.log(data)
  }
  return (
    <div className="container">
      {data.launchesPast.map((launch) => (<div className="mission" key={launch.id}>
        <div className="mission_name" key={launch.id}>
          <a href={launch.links.video_link} target="_blank" rel="noreferrer"><b>Mission Name:</b> {launch.mission_name}</a>
          <p className="rocket_name"><b>Rocket Name:</b> {launch.rocket.rocket_name}</p>
          <p className="mission_date"><b>Launch Date: </b> {moment(launch.rocket.launch_date_local).format("DD MMM YYYY hh:MM")}</p>
          <p className="mission_place"><b>Launch Site: </b> {launch.launch_site.site_name_long}</p>
          { launch.ships.length ? <div className="image">
            <img width="256" height="256" src={launch.ships[0].image} />
          </div> : <></> }
        </div>
      </div>))}
    </div>
  );
}

export default App;
