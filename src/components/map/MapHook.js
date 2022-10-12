import React, {useEffect, useState} from 'react';
import {marker} from './components/mapSettings';


const MapHook = (
    {
      loc,
    },
) => {
  const [mapRef, setMap] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const map = window.L.map('map').setView(loc, 14);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    setMap(map);
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (mapRef && ready) {
      const theMarker = window.L.circle([loc.lat, loc.lng],
          marker);
      mapRef.addLayer(theMarker);
    }
  }, [ready]);
};

export default MapHook;
