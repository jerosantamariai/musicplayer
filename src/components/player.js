import React from 'react';
import Infosong from "./infosong";

const Player = props => {
    return (
        <>
            <container>
                <div className="row">
                    {
                        !!props.songlist &&
                        props.songlist.map((elem, i) => {
                            
                            return (
                                
                            
                                <div className="col-8" id="playercontainer">
                                    <Infosong
                                        url={elem.url}
                                        number={elem.number}
                                        artist={elem.artist}
                                        songname={elem.songname}
                                        ttime={elem.ttime}
                                    />
                                </div>
                                
                                
                            )
                        })

                    }

                </div>
            </container>
        </>
    )
}

export default Player;