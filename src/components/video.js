import React from 'react'
import { Link } from "react-router-dom"

export default function Video(props) {
    const video = require("../../static/assets/videos/" + props.video.path)

    return (
        <div className='page-wrapper video-wrapper'>
            <h3><Link to="/">Home</Link></h3>
            <h4>{props.video.name}</h4>
            <div className="video">
                <button style={{visibility: props[0].match.path.split("/")[2] === "1" ? "hidden" : "visible"}}><Link to={`/video/${parseInt(props[0].match.path.split("/")[2]) - 1}`}>Previous</Link></button>
                <video width="60%" height="60%" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button style={{visibility: props[0].match.path.split("/")[2] === "22" ? "hidden" : "visible"}}><Link to={`/video/${parseInt(props[0].match.path.split("/")[2]) + 1}`}>Next</Link></button>
            </div>
        </div>
    )
}