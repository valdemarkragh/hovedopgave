import React from 'react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Maps = () => {

    const key = 'AIzaSyDNLuw4xNzxvUZUgt1bL7JUfB8FbOutgow';
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return (
        <div style={{ height: '211.3px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>
    )
}
