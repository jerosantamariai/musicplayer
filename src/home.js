import React, { useState, useRef } from 'react';

const Home = props => {
    const urlSong = "https://assets.breatheco.de/apis/sound/";
    const player = useRef(null)
    const [state, setState] = useState({
        songlist: [
            {
                "number": 1,
                "artist": "Game",
                "songname": "Mario Castle",
                "url": urlSong + "files/mario/songs/castle.mp3"
            },
            {
                "number": 2,
                "artist": "Game",
                "songname": "Mario Star",
                "url": urlSong + "files/mario/songs/hurry-starman.mp3"
            },
            {
                "number": 3,
                "artist": "Game",
                "songname": "Mario Overworld",
                "url": urlSong + "files/mario/songs/overworld.mp3"
            }
        ],
    })
    const clickonPlay = () => {
        player.current.load()
        player.current.play()
    }

    const clickonPause = () => {
        player.current.pause()
    }


    return (
        <>
            <container className="subbody">
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Music Player</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="controller">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active mx-4">
                                <a type="button" onClick={() => { clickonPlay() }}><i className="fas fa-play text-white"></i></a>
                            </li>
                            <li className="nav-item active">
                                <a type="button" onClick={() => { clickonPause() }}><i className="fas fa-pause text-white"></i></a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="scrollable">

                            <div className="row">
                                {
                                    !!state.songlist &&
                                    state.songlist.map((elem, i) => {

                                        return (
                                            <ul className="list-group col-12 text-center" id="playercontainer">
                                                <li className="list-group-item list-group-item-action list-group-item-secondary">
                                                    {elem.number} - {elem.artist} - {elem.songname}
                                                    <audio src={elem.url} ref={player}>
                                                    </audio>
                                                </li>
                                            </ul>
                                        )
                                    })

                                }
                            </div>

                        </div>
                    </div>
                </div>
            </container>
        </>
    )
}

export default Home;