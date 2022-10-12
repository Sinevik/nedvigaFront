export const initMap = {
  maxZoom: 18,
  minZoom: 7,
  maxBounds: [
    [50.8857, 22.816679674310507],
    [56.7429, 34.9204],
  ],
};


export const setupMap = {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
  accessToken: 'not-needed',
  style: 'https://api.maptiler.com/maps/f9c6d145-d428-405b-ac6d-4d3321495b52/style.json?key=2jgfAgQpeTeepxTVQoKA',
};


export const marker = {
  radius: 20, color: 'blue', fillColor: 'blue', fillOpacity: 1,
};

export const paramsGeoSearch = {
  params: {
    'accept-language': 'ru',
    'countrycodes': 'by',
    'addressdetails': 0,
  },
};
