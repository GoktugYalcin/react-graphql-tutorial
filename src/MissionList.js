import React, {useContext} from "react";
import MissionCard from "./MissionCard";
import { useQuery, gql } from "@apollo/client";
import { SearchContext } from './context/SearchContext';

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

    if(loading) return <div className="loading">Fetching Data...</div>
    if(error) return <div className="error">{error.message}</div>

    return (
        <div id="container">
            {data.launchesPast.map((launch, index) => (
                launch?.mission_name?.toLowerCase().includes(search.toLowerCase()) && <MissionCard key={index} launch={launch} />
            ))}
        </div>
    );
}

export default MissionList;
