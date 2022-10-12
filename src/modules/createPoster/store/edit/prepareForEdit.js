const getPictures = (poster) => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    if (poster.photos[i]) {
      arr.push({
        title: Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1),
        path: poster.photos[i],
      });
    }
  }
  return arr;
};

const getCount = (number, max) => {
  let result = number ? `${number}` : '1';
  if (number && (number >= max)) {
    result = `${max}+`;
  }
  return result;
};

const prepareForEdit = (poster) => {
  const newState = {
    edit: poster._id,
    page: 0,
    phone: poster.phone ? poster.phone.map((phone) => {
      return {
        value: phone, valid: true, warning: null,
      };
    }) : [
      {
        value: null, valid: false, warning: null,
      },
    ],
    contacts: poster.contacts ? poster.contacts.map((contact) => {
      return [
        {value: contact.method, valid: true, warning: null},
        {value: contact.path, valid: true, warning: null},
      ];
    }) : [],
    pictures: getPictures(poster),
    unp: {value: poster.unp || null, valid: !!poster.unp, warning: null},
    legalName: {value: poster.legalName || null, valid: !!poster.legalName, warning: null},
    name: {value: poster.name || null, valid: !!poster.name, warning: null},
    landArea: {value: poster.landArea || null, valid: !!poster.landArea, warning: null},
    kitchenArea: {value: poster.kitchenArea || null, valid: !!poster.kitchenArea, warning: null},
    livingArea: {value: poster.livingArea || null, valid: !!poster.livingArea, warning: null},
    area: {value: poster.area || null, valid: !!poster.area, warning: null},
    countRoomsInput: {value: poster.countRooms || null, valid: !!poster.countRooms, warning: null},
    yearOfConstruction: {value: poster.yearOfConstruction || null, valid: !!poster.yearOfConstruction, warning: null},
    ceilingHeight: {value: poster.ceilingHeight || null, valid: !!poster.ceilingHeight, warning: null},
    countFloors: {value: poster.countFloors || null, valid: !!poster.countFloors, warning: null},
    floor: {value: poster.floor || null, valid: !!poster.floor, warning: null},
    price: {value: poster.price || null, valid: !!poster.price, warning: null},
    kind: poster.kind || 'flat',
    typeApartment: poster.typeApartment || 'first',
    typePoster: poster.typePoster || 'rent',
    typeSales: poster.typeSales || 'owner',
    typeCommercial: poster.typeCommercial || 'sale',
    wallMaterial: poster.wallMaterial || 'cube',
    parkingPlace: poster.parkingPlace || 'no',
    comfort: poster.comfort || [],
    shed: poster.shed ? 'yes' : 'no',
    description: poster.description || '',
    countSeatsShed: getCount(poster.countSeatsShed, 4),
    callFrom: poster.callTime.from || '8:00',
    callTo: poster.callTime.to || '0:00',
    conditionsRent: poster.conditionsRent || [],
    countRooms: getCount(poster.countRooms, 6),
    combineKitchen: poster.combineKitchen ? 'yes' : 'no',
    loggia: poster.loggia ? 'yes' : 'no',
    centerMap: poster.location ? {
      lat: poster.location.coordinates[0],
      lng: poster.location.coordinates[1],
    } : {lat: 53.9, lng: 27.56667},
    location: poster.location ? {lat: poster.location.coordinates[0], lng: poster.location.coordinates[1]} : {
      lat: null,
      lng: null,
    },
    fullAddress: poster.fullAddress || '',
    city: poster.city || '',
  };
  return newState;
};


export default prepareForEdit;
