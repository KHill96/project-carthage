import React, { useState } from "react";
import {useParams} from 'react-router'
import videoTemp from '../Assets/NOTL.mp4'
import subtitles from '../Assets/subs.vtt'
import ReactPlayer from 'react-player'

const Movie = () => {
    const params = useParams();
    console.log(params);

    const [playerState, setPlayerState] = useState({
        video: {
            src: videoTemp,
            subtitlesSrc: subtitles,
            poster:"https://image.posterlounge.com/img/products/350000/346541/346541_poster_l.jpg"
        }
    });
    
   
    


    // Get info and items from firebae

    return (
        <div className="container">
            <h1 className="movie-main-title">Night of the living Dead</h1>
            <div className="player-wrapper">
                <ReactPlayer 
                    className="movie"
                    url={playerState.video.src}
                    // url="../Assets/NOTL.mp4"
                    controls={true}
                    config={{
                        file:{
                            tracks:[
                                {
                                    kind:"subtitles",
                                    src:playerState.video.subtitlesSrc,
                                    srcLang:"en",
                                    default: true,
                                    label:"EnglishTest"
                                }
                            ]
                        }
                    }}
                
                />
           
            </div>
            <div className="movie-description">
            <br></br>A disparate group of individuals takes refuge
             in an abandoned house when corpses begin to leave the graveyard in search
            of fresh human bodies to devour. The pragmatic Ben (Duane Jones) 
            does his best to control the situation, but when the reanimated bod
            ies surround the house, the other survivors begin to panic. As any semb
            lance of order within the group begins to dissipate, the zombies start t
            o find ways inside -- and one by one, the living humans become the prey of
             the deceased ones.
            </div>

            <div className="buffer-2"></div>
            

        </div>
    );

}

export default Movie;