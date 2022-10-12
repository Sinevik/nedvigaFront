import {useEffect} from 'react';
import {marker} from '../components/mapSettigs';

export const SubFormReduxHook = ({
  setAddress,
  setCenterMap,
  reduxFieldValue,
  mapRef,
}) => {
  const handlerAddCoordinates = (latLng) => {
    const newArray = reduxFieldValue.concat();
    newArray.push(latLng);
    setAddress(newArray);
    const {lat, lng} = mapRef.getCenter();
    setCenterMap({lat, lng});
  };

  useEffect(() => {
    if (mapRef) {
      reduxFieldValue.forEach((item) => {
        window.L.circle([item.lat, item.lng],
            marker).addTo(mapRef);
      });
    }
  }, [mapRef]);

  return {handlerAddCoordinates};
};
