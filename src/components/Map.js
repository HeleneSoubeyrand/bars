import { useContext } from 'react'
import GoogleMapReact from 'google-map-react'

import { MapContextProvider } from '../contexts/Map'
import { MapContext } from '../contexts/Map'

const Map = () => {
    const { location, setLocation } = useContext(MapContext)
    console.log(location)
    const myPosition = {
        center: {
          lat: location.lat,
          lng: location.lng
        },
        zoom: 11
    };

    if (!location) {
        return <p>Chargement...</p>
      }

    return (
        <MapContextProvider>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={location.center}
                    defaultZoom={14}
                >
                {/* <Marker
                    lat={location.lat}
                    lng={location.lng}
                /> */}
                </GoogleMapReact>
            </div>
        </MapContextProvider>
    );
};

export default Map;