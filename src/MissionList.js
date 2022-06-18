import React, {useContext} from "react";
import MissionCard from "./MissionCard";
import { useQuery, gql } from "@apollo/client";
import { SearchContext } from './context/SearchContext';
import {JellyTriangle} from "@uiball/loaders";

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

const MissionList = () => {
    const {data, loading, error} = useQuery(FILMS_QUERY)

    const { search } = useContext(SearchContext)

    if(loading) return <div id="container">
        <div className="loader">
            <JellyTriangle
                size={60}
                speed={1.75}
                color="#fbe9e5"
            />
        </div>
    </div>
    if(error) return <div id="container">{error.message}</div>

    return (
        <div id="container">
            {data.launchesPast.map((launch, index) => (
                launch?.mission_name?.toLowerCase().includes(search.toLowerCase()) && <MissionCard key={index} launch={launch} />
            ))}
        </div>
    );
}

export default MissionList;
