export const flat = (data) => [
  {
    title: 'count-rooms',
    value: data.countRooms >= 6 ? '6+' : data.countRooms,
  },
  {
    title: 'area',
    value: data.area,
    units: 'м',
    sup: 2,
  },
  {
    title: 'kitchen-area',
    value: data.kitchenArea,
    units: 'м',
    sup: 2,
  },
  {
    title: 'live-area',
    value: data.livingArea,
    units: 'м',
    sup: 2,
  },
  {
    title: 'year-of-construction',
    value: data.yearOfConstruction,
  },
  {
    title: 'count-floors',
    value: data.countFloors,
  },
  {
    title: 'floor',
    value: data.floor,
  },
  {
    title: 'wall-material',
    value: data.wallMaterial,
  },
  {
    title: 'loggia-or-balcony',
    value: data.loggia ? 'yes' : 'no',
  },
  {
    title: 'combine-kitchen',
    value: data.combineKitchen ? 'yes' : 'no',
  },
  {
    title: 'parking-place',
    value: data.parkingPlace,
  },
];

export const house = (data) => [
  {
    title: 'state',
    value: data.state,
  },
  {
    title: 'count-rooms',
    value: data.countRooms,
  },
  {
    title: 'wall-material',
    value: data.wallMaterial,
  },
  {
    title: 'area',
    value: data.area,
    units: 'm',
    sup: 2,
  },
  {
    title: 'live-area',
    value: data.livingArea,
    units: 'м',
    sup: 2,
  },
  {
    title: 'land-area',
    value: data.landArea,
    units: 'м',
    sup: 2,
  },
  {
    title: 'count-floors',
    value: data.countFloors,
  },
  {
    title: 'shed',
    value: data.shed ? 'yes' : 'no',
  },
  {
    title: 'number-of-car-spaces-in-the-garage',
    value: data.countSeatsShed >= 4 ? '4+' : data.countSeatsShed ? data.countSeatsShed : '- - - -',
  },
  {
    title: 'year-of-construction',
    value: data.yearOfConstruction,
  },
];

export const commercial = (data) => [
  {
    title: 'area',
    value: data.area,
    units: 'm',
    sup: 2,
  },
  {
    title: 'type-commercial',
    value: data.typeCommercial,
  },
  {
    title: 'year-of-construction',
    value: data.yearOfConstruction,
  },
  {
    title: 'state',
    value: data.state,
  },
];

export const shed = (data) => [
  {
    title: 'area',
    value: data.area,
    units: 'm',
    sup: 2,
  },
  {
    title: 'wall-material',
    value: data.wallMaterial,
  },
  {
    title: 'year-of-construction',
    value: data.yearOfConstruction,
  },
  {
    title: 'state',
    value: data.state,
  },
  {
    title: 'number-of-car-spaces-in-the-garage',
    value: data.countSeatsShed >= 4 ? '4+' : data.countSeatsShed ? data.countSeatsShed : '- - - -',
  },
];

export const room = (data) => [
  {
    title: 'area',
    value: data.area,
    units: 'm',
    sup: 2,
  },
  {
    title: 'wall-material',
    value: data.wallMaterial,
  },
  {
    title: 'count-floors',
    value: data.countFloors,
  },
  {
    title: 'floor',
    value: data.floor,
  },
  {
    title: 'year-of-construction',
    value: data.yearOfConstruction,
  },
];

export const land = (data) => [
  {
    title: 'Площадь',
    value: data.area,
    units: 'm',
    sup: 2,
  },
];
