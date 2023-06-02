import React from 'react'
import {
    YMaps,
    Map,
    Placemark,
    FullscreenControl,
    ZoomControl,
} from '@pbe/react-yandex-maps'

const MapComp = () => {
    return (
        <div className="map">
            <YMaps>
                <Map
                    defaultState={{ center: [52.42416, 31.014281], zoom: 11 }}
                    width={'100%'}
                    height={'400px'}
                >
                    <Placemark geometry={[52.423381, 30.972159]} />
                    <Placemark geometry={[52.469504, 30.974809]} />
                    <FullscreenControl options={{ float: 'left' }} />
                    {/* @ts-ignore */}
                    <ZoomControl options={{ float: 'right' }} />
                </Map>
            </YMaps>
        </div>
    )
}

export default MapComp
