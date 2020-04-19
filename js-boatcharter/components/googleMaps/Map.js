import React from 'react'
import GoogleMapReact from 'google-map-react';

import { Marker } from './Marker';

export const Map = () => {

    const key = 'AIzaSyDNLuw4xNzxvUZUgt1bL7JUfB8FbOutgow';
    const defaultProps = {
        center: {
          lat: 55.6801488,
          lng: 12.5888314
        },
        zoom: 16
      };
    return (
        <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
            <Marker 
            lat={55.680148}
            lng={12.588767}
            name="Js-Boatcharter"
            color="blue" />
        </GoogleMapReact>
      </div>
    )
}