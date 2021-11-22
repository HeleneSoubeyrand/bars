import { useContext } from 'react'
import GoogleMapReact from 'google-map-react'

import { MapContext } from '../contexts/Map'
import Marker from './Marker'

const Map = () => {
    const { location, bars } = useContext(MapContext)
    console.log("test",location)
    
    if (location == null) {
        return <p>Chargement...</p>
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={location}
                defaultZoom={11}
            >
                {bars.map(bar =>
                    <Marker
                        lat={bar.latitude}
                        lng={bar.longitude}
                    />
                )} 
            </GoogleMapReact>
        </div>
    );
};

export default Map;