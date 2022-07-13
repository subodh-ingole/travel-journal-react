import React from 'react'

const Card = (props) => {
  return (
    <div className="main">
        <img className="card-image" src={props.imageUrl} />
        <div className="card-text">
            <img src="loc.png" className="location"/><span className="country">{props.location}</span>
            <span class="link"><a href={props.googleMapsUrl}>view here</a></span>
            <h1 className="card-title">{props.title}</h1>
            <h4 className="card-subtitle">{props.startDate} - {props.endDate}</h4>
            <p className="card-desc">{props.description}
            </p>
            </div>
    </div>
  )
}

export default Card