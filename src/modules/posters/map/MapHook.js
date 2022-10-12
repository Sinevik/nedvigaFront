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
    getPostersIdArray,
    getPostersMap,
  } = Actions('posters')(useDispatch());
  const {
    setCenterMap,
  } = Actions('storage')(useDispatch());
  const [mapRef, setMap] = useState(null);
  const [ready, setReady] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [timerId, setTimerId] = useState(null);
  const [arrayMarker, setArrayMarker] = useState([]);

  const posters = useSelector((state) => state.posters.postersMap);
  const center = useSelector((state) => state.storage.centerMap);


  const handlerSearchInput = async (value) => {
    setSearchValue(value);
    clearTimeout(timerId);
    const timeoutId = setTimeout(async () => {
      const provider = new window.GeoSearch
          .OpenStreetMapProvider(paramsGeoSearch);
      const results = await provider.search({query: value});
      setResultSearch(results);
    }, 500);
    setTimerId(timeoutId);
  };

  const handlerOutsideSearch = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
    setResultSearch([]);
  };

  const handlerClickSearch = async (e) => {
    setResultSearch([]);
    const {x, y} = e;
    setCenterMap({lat: y, lng: x});
  };

  const onClickMarker = (e) => {
    getPostersIdArray(e.target.posterId);
  };

  useEffect(() => {
    if (mapRef) {
      setReady(false);
      mapRef.remove();
    }
    const map = window.L.map('map').setView(center, 11);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    setMap(map);
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, [fullScreen, center]);

  useEffect(() => {
    const arrMarker = [];
    if (mapRef && posters) {
      arrayMarker.forEach((item) => {
        mapRef.removeLayer(item);
      });

      posters.forEach((item, index) => {
        if (item.type !== 'number') {
          const theMarker = window.L.circle([item.location.coordinates[0], item.location.coordinates[1]],
              marker);
          theMarker.posterId = item.ids;
          theMarker.on('click', onClickMarker);
          arrMarker.push(theMarker);
          mapRef.addLayer(arrMarker[index]);
        } else {
          const myIcon = L.divIcon({className: 'dummy', html: `<p style="cursor: default; font-family: \'Roboto\'; font-style: normal; font-weight: 400; font-size: 10px; line-height: 14px;background: #FFCB68; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${item.ids.length}</p>`});
          const theMarker = window.L.marker([item.location.coordinates[0], item.location.coordinates[1]],
              {icon: myIcon});
          theMarker.posterId = item.ids;
          arrMarker.push(theMarker);
          mapRef.addLayer(arrMarker[index]);
        }
      });
    }
    setArrayMarker(arrMarker);
  }, [posters, ready, fullScreen]);

  useEffect(() => {
    if (ready) {
      let clusters = [];
      mapRef.on('zoomend', (event) => {
        if (event.target._zoom > 13) {
          getPostersMap({
            distance: 'min',
            lat: mapRef.getCenter().lat,
            lng: mapRef.getCenter().lng,
          });
        }
        if (event.target._zoom < 13 && event.target._zoom > 11) {
          getPostersMap({
            distance: 'max',
            lat: mapRef.getCenter().lat,
            lng: mapRef.getCenter().lng,
          });
          getPostersIdArray([]);
        }
        if (event.target._zoom > 14 && small) {
          clusters = [];
          mapRef.eachLayer((l) => {
            if (l instanceof window.L.Circle &&
              mapRef.getBounds().contains(l.getLatLng())) {
              clusters = [...clusters, ...l.posterId];
            }
          });
          getPostersIdArray(clusters);
        }
      });
      mapRef.on('moveend', (event) => {
        if (event.target._zoom > 13) {
          getPostersMap({
            distance: 'min',
            lat: mapRef.getCenter().lat,
            lng: mapRef.getCenter().lng,
          });
        }
        if (event.target._zoom > 14 && small) {
          clusters = [];
          mapRef.eachLayer((l) => {
            if (l instanceof window.L.Circle &&
              mapRef.getBounds().contains(l.getLatLng())) {
              clusters = [...clusters, ...l.posterId];
            }
          });
          getPostersIdArray(clusters);
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
