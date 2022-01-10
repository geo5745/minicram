import React, {useState} from 'react';
import ReactMapGL, {WebMercatorViewport} from 'react-map-gl'

const Practice = () => {
    
    const [viewport, setViewport] = useState({
        latitude:33.018505,
        longitude:-80.175652,
        width:'100vw',
        height:'100vh',
        zoom:12
    })

    const whatsInViewport = (viewport) => {
        setViewport(viewport);
        const myviewport = new WebMercatorViewport({ width: 800, height: 600, zoom:12 })
        console.log(myviewport.getBoundingRegion())
        // console.log(viewport);
    }
    
    return(
        <div>
            <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken='pk.eyJ1IjoiZGlhbW9udC1pbnYiLCJhIjoiY2t5NjI4ZmNvMHJwODJ1cTltbzc2dnRveiJ9.0Ktpq7MYPubDtUe6UxRnDw'
                //onViewportChange={viewport => setViewport(viewport)}
                onViewportChange={viewport => whatsInViewport(viewport)}
            >
                    markers here
            </ReactMapGL>
        </div>
    )
}

export default Practice;