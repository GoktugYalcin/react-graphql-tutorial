import React from "react";
import moment from 'moment';
import Fade from "react-reveal/Fade";

const MissionCard = ({launch}) => {
    return <>
        <Fade duration={400}>
            <div className="mission" key={launch.id}>
                <div className="mission_name" key={launch.id}>
                    <a href={launch.links.video_link} target="_blank" rel="noreferrer"><b>Mission Name:</b> {launch.mission_name}</a>
                    <p className="rocket_name"><b>Rocket Name:</b> {launch.rocket.rocket_name}</p>
                    <p className="mission_date"><b>Launch Date: </b> {moment(launch.rocket.launch_date_local).format("DD MMM YYYY hh:MM")}</p>
                    <p className="mission_place"><b>Launch Site: </b> {launch.launch_site.site_name_long}</p>
                    { launch.ships.length ? <div className="image">
                        <img width="200" alt={launch.launch_site.site_name_long} height="200" src={launch.ships[0].image} />
                    </div> : <></> }
                </div>
            </div>
        </Fade>
    </>
}

export default MissionCard