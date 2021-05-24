import React from 'react'
import './RecentItems.css'

const RecentItems = ({url, title}) => {
    return (
        <div className="item">
            <iframe
                width="400"
                height="235"
                src={url}
                frameborder="0"
                allow="accelerator; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            ></iframe>

            <div className="item__details">
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-280x380.jpg"/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>sounditgh</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItems
