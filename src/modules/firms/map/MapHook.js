import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../../redux/Actions';

import {marker, paramsGeoSearch} from './components/mapSettigs';
import {useMedia} from 'react-media';

const MapHook = ({fullScreen}) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 800px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const {
    setSelectedFirmMap,
    getFirmsIdArray,
  } = Actions('firms')(useDispatch());
  const {
    setCenterMap,
  } = Actions('storage')(useDispatch());
  const [mapRef, setMap] = useState(null);
  const [ready, setReady] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [timerId, setTimerId] = useState(null);
  const [arrayMarker, setArrayMarker] = useState([]);

  const firms = useSelector((state) => state.firms.firmsMap);
  const center = useSelector((state) => state.storage.centerMap);


  const handlerSearchInput = async (value) => {
    setSearchValue(value);
    clearTimeout(timerId);
    const timeoutId = setTimeout(async () => {
      const provider = new window.GeoSearch
          .OpenStreetMapProvider(paramsGeoSearch);
      console.log(provider);
      const results = await provider.search({query: value});
      setResultSearch(results);
    }, 500);
    setTimerId(timeoutId);
  };

  const handlerOutsideSearch = () => {
    setResultSearch([]);
  };

  const handlerClickSearch = async (e) => {
    setResultSearch([]);
    const {x, y} = e;
    await mapRef.setView([y, x], 14);
    setCenterMap(mapRef.getCenter());
  };

  const onClickMarker = (e) => {
    setSelectedFirmMap(e.target.posterId);
  };

  useEffect(() => {
    if (mapRef) {
      setReady(false);
      mapRef.remove();
    }
    const map = window.L.map('map').setView(center, 14);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    setMap(map);
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, [fullScreen]);

  useEffect(() => {
    const arrMarker = [];
    if (mapRef && firms) {
      arrayMarker.forEach((item) => {
        mapRef.removeLayer(item);
      });

      firms.forEach((item, index) => {
        const theMarker = window.L.circle([item.location.coordinates[0], item.location.coordinates[1]],
            marker);
        theMarker.posterId = item.ids;
        theMarker.on('click', onClickMarker);
        arrMarker.push(theMarker);
        mapRef.addLayer(arrMarker[index]);
      });
    }
    setArrayMarker(arrMarker);
  }, [firms, ready, fullScreen]);

  useEffect(() => {
    if (ready) {
      let clusters = [];
      mapRef.on('zoomend', (event) => {
        if (event.target._zoom > 14 && small) {
          clusters = [];
          mapRef.eachLayer((l) => {
            if (l instanceof window.L.Circle &&
              mapRef.getBounds().contains(l.getLatLng())) {
              clusters = [...clusters, ...l.posterId];
            }
          });
          getFirmsIdArray(clusters);
        }
      });
      mapRef.on('moveend', (event) => {
        if (event.target._zoom > 14 && small) {
          clusters = [];
          mapRef.eachLayer((l) => {
            if (l instanceof window.L.Circle &&
              mapRef.getBounds().contains(l.getLatLng())) {
              clusters = [...clusters, ...l.posterId];
            }
          });
          getFirmsIdArray(clusters);
        }
      });
    }
  }, [ready]);


  return {
    searchValue,
    resultSearch,
    small,
    handlerClickSearch,
    handlerOutsideSearch,
    handlerSearchInput,
  };
};

export default MapHook;
