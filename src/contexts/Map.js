import { createContext, useState, useEffect } from "react"

import barsArray from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = props => {
    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState(barsArray)

    const value = {
        location: location,
        bars: bars
    }

    useEffect(() => {
        console.log("Récupération de la localisation...")
    
        navigator.geolocation.getCurrentPosition(
          location => {
            console.log(location.coords)
            setLocation({
              lat: location.coords.latitude,
              lng: location.coords.longitude
            })
          },
          error => {
            console.log(error)
          }
        )
      }, [])
    
    return (
        <MapContext.Provider value={value}>
            {props.children}
        </MapContext.Provider>
    );
};



export {
    MapContext,
    MapContextProvider
}