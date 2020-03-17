import React, { useState } from 'react';
import Header from './components/header';
import Player from './components/player';

const Home = props => {

    const [state, setState] = useState({
        songlist: [
            { 
                "number": 1, 
                "artist": "Game", 
                "songname": "Mario Castle", 
                "url": "https://assets.breatheco.de/apis/sound/" + "files/mario/songs/castle.mp3" 
            },
            { 
                "number": 2, 
                "artist": "Game", 
                "songname": "Mario Star", 
                "url": "https://assets.breatheco.de/apis/sound/" + "files/mario/songs/hurry-starman.mp3" 
            },
            { 
                "number": 3, 
                "artist": "Game", 
                "songname": "Mario Overworld", 
                "url": "https://assets.breatheco.de/apis/sound/" + "files/mario/songs/overworld.mp3" 
            }
        ],
    })

    return (
        <>
            <container>
                <Header />
                <div className="col-2"></div>
                <Player songlist={state.songlist} />
            </container>
        </>
    )
}

export default Home;