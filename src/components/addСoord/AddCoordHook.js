import {useEffect, useState} from 'react';
import {cities} from './cities/Cities';
import {marker, paramsGeoSearch} from './components/mapSettigs';

const AddCoordHook = ({
  centerMap,
  mapRef,
  setMap,
  setOldMarker,
  oldMarker,
  city,
  fullAddress,
}) => {
  const [latLng, setLatLng] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [searchValueCity, setSearchValueCity] = useState('');
  const [resultSearchCity, setResultSearchCity] = useState([]);
  const [timerId, setTimerId] = useState(null);

  const handlerSearchInputCity = async (value) => {
    setSearchValueCity(value);
    setResultSearchCity(cities.filter((item) => item.label.includes(value)));
  };

  const handlerOutsideSearchCity = () => {
    setResultSearchCity([]);
  };

  const handlerClickSearchCity = async (item) => {
    const {label, lat, lng} = item;
    setSearchValueCity(label);
    setResultSearchCity([]);
    setSearchValue(label);
    await mapRef.setView([lat, lng], 14);
  };

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
    setResultSearch([]);
  };

  const handlerClickSearch = async (e) => {
    setSearchValue(e.label);
    setResultSearch([]);
    const {x, y} = e;
    await mapRef.setView([y, x], 14);
    setLatLng({
      lat: y,
      lng: x,
    });
  };

  const handlerClickMap = async (e) => {
    const {lat, lng} = e.latlng;
    setLatLng({
      lat,
      lng,
    });
  };

  useEffect(() => {
    if (latLng) {
      if (oldMarker) {
        mapRef.removeLayer(oldMarker);
      }
      const theMarker = window.L.circle([latLng.lat, latLng.lng],
          marker).addTo(mapRef);


      setOldMarker(theMarker);
    }
  }, [latLng]);

  useEffect(() => {
    setSearchValue(fullAddress || '');
    setSearchValueCity(city || '');
    const map = window.L.map('map').setView(centerMap, 14);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    map.on('click', (e) => {
      handlerClickMap(e);
    });
    setMap(map);
  }, []);

  return {
    searchValue,
    resultSearch,
    latLng,
    resultSearchCity,
    searchValueCity,
    handlerClickSearchCity,
    handlerSearchInputCity,
    handlerOutsideSearchCity,
    handlerClickSearch,
    handlerOutsideSearch,
    handlerSearchInput,
  };
};

export default AddCoordHook;
