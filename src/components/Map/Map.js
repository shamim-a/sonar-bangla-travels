import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const location = {
  lat: 25.0152201,
  lng: 90.0144433
};
const onLoad = marker => {
  console.log('marker: ', marker)
}

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAw89ciReeaXLJRP1Gy7FdiMLQJ-nZejfo"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker
          onLoad={onLoad}
          position={location}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)