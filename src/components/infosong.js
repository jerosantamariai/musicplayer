import React from 'react'

const Infosong = props => {

    

    return (
        <>
            <a href="/#" className="list-group-item list-group-item-action list-group-item-dark">
               
            {props.number} - {props.artist} - {props.songname} - {props.ttime}<audio src={props.url} controls></audio>
                
            </a>
        </>
    )
}

export default Infosong;