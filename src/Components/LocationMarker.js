import React from 'react'
import WhatshotIcon from '@material-ui/icons/Whatshot'

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <div className="location-icon">
        <WhatshotIcon />
      </div>
    </div>
  )
}

export default LocationMarker
