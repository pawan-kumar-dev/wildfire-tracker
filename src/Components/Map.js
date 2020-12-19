import GoogleMapReact from 'google-map-react'
import React, { useState } from 'react'
import { key } from '../key'
import InfoBox from './InfoBox'
import LocationMarker from './LocationMarker'

const Map = (props) => {
  const { data } = props
  const [locationInfo, setLocationInfo] = useState(null)
  const markers = data.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      )
    }
    return null
  })
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <InfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
}
export default Map
