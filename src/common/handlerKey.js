class HandlerKey {
  getPropertyPoster(str) {
    const start = str.indexOf('[');
    const end = str.indexOf(']');
    return str.slice(start + 1, end);
  }

  flatDecrypt(str) {
    const arr = str.split(',');

    const obg = {
      state: arr[0],
      wallMaterial: arr[1],
      typeApartment: arr[2],
      countRooms: arr[3],
      loggia: arr[4],
      parkingPlace: arr[5],
      combineKitchen: arr[6],
      floor: arr[7],
      area: arr[8],
      livingArea: arr[9],
      kitchenArea: arr[10],
      countFloors: arr[11],
      ceilingHeight: arr[12],
      yearOfConstruction: arr[13],
      price: arr[14],
      typeRent: arr[15],
    };

    return obg;
  }

  houseDecrypt(str) {
    const arr = str.split(',');

    const obg = {
      state: arr[0],
      wallMaterial: arr[1],
      countRooms: arr[2],
      shed: arr[3],
      area: arr[4],
      livingArea: arr[5],
      landArea: arr[6],
      countFloors: arr[7],
      yearOfConstruction: arr[8],
      price: arr[9],
      typeRent: arr[10],
    };

    return obg;
  }

  dachaDecrypt(str) {
    const arr = str.split(',');

    const obg = {
      state: arr[0],
      wallMaterial: arr[1],
      countRooms: arr[2],
      shed: arr[3],
      area: arr[4],
      livingArea: arr[5],
      landArea: arr[6],
      countFloors: arr[7],
      yearOfConstruction: arr[8],
      price: arr[9],
      typeRent: arr[10],
    };

    return obg;
  }

  shedDecrypt(str) {
    const arr = str.split(',');

    const obg = {
      state: arr[0],
      wallMaterial: arr[1],
      area: arr[2],
      countSeatsShed: arr[3],
      yearOfConstruction: arr[4],
      price: arr[5],
      typeRent: arr[6],
    };

    return obg;
  }

  commercialDecrypt(str) {
    const arr = str.split(',');

    const obg = {
      typeCommercial: arr[0],
      state: arr[1],
      area: arr[2],
      yearOfConstruction: arr[3],
      price: arr[4],
      typeRent: arr[5],
    };

    return obg;
  }

  roomDecrypt(str) {
    const arr = str.split(',');

    const obg = {
      wallMaterial: arr[0],
      floor: arr[1],
      countFloors: arr[2],
      area: arr[3],
      yearOfConstruction: arr[4],
      price: arr[5],
      typeRent: arr[6],
    };

    return obg;
  }

  landDecrypt(str) {
    const arr = str.split(',');

    const obg = {
      area: arr[0],
      price: arr[1],
      typeRent: arr[2],
    };

    return obg;
  }
}

export default HandlerKey;
