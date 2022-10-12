import {useEffect, useRef} from 'react';
import {marker} from '../components/mapSettigs';

export const ReduxHook = ({
  setAddress,
  setCenterMap,
  searchValue,
  searchValueCity,
  setOldMarker,
  reduxFieldValue,
  latLng,
  mapRef,
}) => {
  const isFirstRender = useRef(false);
  const handlerAddCoordinates = () => {
    console.log('nothing');
  };

  useEffect(() => {
    if (isFirstRender.current) {
      setAddress(
          {
            lat: latLng.lat,
            lng: latLng.lng,
            fullAddress: searchValue.length > 2 ? searchValue : null,
            city: searchValueCity.length > 2 ? searchValueCity : null,
          },
      );
      setCenterMap({lat: latLng.lat, lng: latLng.lng});
    } else {
      isFirstRender.current = true;
    }
  }, [latLng]);

  useEffect(() => {
    if (mapRef && reduxFieldValue.lat) {
      const theMarker = window.L.circle(
          [reduxFieldValue.lat, reduxFieldValue.lng],
          marker).addTo(mapRef);

      setOldMarker(theMarker);
    }
  }, [mapRef]);

  return {handlerAddCoordinates};
};
