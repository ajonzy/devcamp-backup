import React from 'react'
import { Link } from "react-router-dom"

export default function Home(props) {
    const renderVideoLinks = () => {
        const videoLinks = []

        for (let i=0; i<props.videos.length; i++) {
            videoLinks.push(
                <Link key={i} to={`/video/${i + 1}`}>{props.videos[i].name}</Link>
            )
        }

        return videoLinks
    }

    return (
        <div className='page-wrapper home-wrapper'>
            <h2>Devcamp Videos</h2>
            {renderVideoLinks()}
        </div>
    )
}