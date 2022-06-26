import React from 'react'

const LocationData = ({location}) => {
   
  return (
    <div className='location-data'>
        <h2>{location?.name}</h2>
        <ul className='location-ul'>
            <li><span>Type: </span> {location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationData