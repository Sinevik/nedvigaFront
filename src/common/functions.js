/* eslint-disable */

export const onJumpUp = (scrollTargetY, speed, easing) => {
  // first add raf shim
  // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
  window.requestAnimFrame = (
    function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
    })();

  // home function
  function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY,
      scrollTargetY = scrollTargetY || 0,
      speed = speed || 2000,
      easing = easing || 'easeOutSine',
      currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
      easingEquations = {
        easeOutSine: function (pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function (pos) {
          return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        },
        easeInOutQuint: function (pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow((pos - 2), 5) + 2);
        }
      };

    // add animation loop
    function tick() {
      currentTime += 1 / 60;

      const p = currentTime / time;
      const t = easingEquations[easing](p);

      if (p < 1) {
        window.requestAnimFrame(tick);

        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
      } else {
        console.log('scroll done');
        window.scrollTo(0, scrollTargetY);
      }
    }

    // call it once to get started
    tick();
  }

  return scrollToY;
};

export const prepareUserForSave = (createUser) => {
  let userSave;
  let validPhone = createUser.phone.filter((item) => item.valid);
  let phone = validPhone.map((item) => {
    let str = item.value;
    let str1 = str.replace('(', '');
    let str2 = str1.replace(')', '');
    return str2;
  });

  let validContacts = createUser.contacts.filter((item) =>
    (item[0].value && item[1].value) && (item[0].value.length > 0 && item[1].value.length > 0));

  let contacts = validContacts.map((item) => {
    return {
      method: item[0].value,
      path: item[1].value,
    }
  });

  userSave = {
    firstName: createUser.firstName.value,
  };

  if (createUser.avatar) {
    userSave.avatar = createUser.avatar[0].path || ''
  }

  if (createUser.contacts && createUser.contacts.length > 0) {
    userSave.contacts = contacts
  }

  if (createUser.lastName.valid) {
    userSave.lastName = createUser.lastName.value
  }

  if (createUser.email.valid) {
    userSave.publicEmail = createUser.email.value
  }

  if (createUser.webSite.valid) {
    userSave.webSite = createUser.webSite.value
  }

  if (phone && phone.length > 0) {
    userSave.phone = phone
  }

  return userSave
};

export const prepareFirmForSave = (createFirm) => {
  let companySave;
  let validPhone = createFirm.phone.filter((item) => item.valid);
  let phone = validPhone.map((item) => {
    let str = item.value;
    let str1 = str.replace('(', '');
    let str2 = str1.replace(')', '');
    return str2;
  });

  let validContacts = createFirm.contacts.filter((item) =>
    (item[0].value && item[1].value) && (item[0].value.length > 0 && item[1].value.length > 0));

  let contacts = validContacts.map((item) => {
    return {
      method: item[0].value,
      path: item[1].value,
    }
  });

  let validPhotos = createFirm.pictures.map((item) => item.path);
  let masterPhoto = validPhotos[createFirm.masterPicture];
  let photos = masterPhoto ? [masterPhoto] : [];
  validPhotos.forEach((item) => {
    if (item !== masterPhoto) {
      photos.push(item)
    }
  });


  companySave = {
    avatar: createFirm.avatar[0].path,
    legalName: createFirm.legalName.value,
    unp: createFirm.unp.value,
    unpPhoto: createFirm.unpPhoto[0].path,
    categories: createFirm.categories,
    address: createFirm.address,
    photos: photos,
    email: createFirm.email.valid ? createFirm.email.value : null,
    phone: phone,
  };


  if (contacts && contacts.length > 0) {
    companySave.contacts = contacts;
  }

  if (createFirm.webSite.valid) {
    companySave.webSite = createFirm.webSite.value
  }

  if (createFirm.avatar) {
    companySave.avatar = createFirm.avatar[0].path
  }

  if (createFirm.description.length > 0) {
    companySave.description = createFirm.description
  }

  return companySave
};

export const preparePosterForSave = (createPoster) => {
  let posterSave;
  let validPhone = createPoster.phone.filter((item) => item.valid);
  let phone = validPhone.map((item) => {
    let str = item.value;
    let str1 = str.replace('(', '');
    let str2 = str1.replace(')', '');
    return str2;
  });

  let validContacts = createPoster.contacts.filter((item) =>
    (item[0].value && item[1].value) && (item[0].value.length > 0 && item[1].value.length > 0));

  let contacts = validContacts.map((item) => {
    return {
      method: item[0].value,
      path: item[1].value,
    }
  });

  let validPhotos = createPoster.pictures.map((item) => item.path);
  let masterPhoto = validPhotos[createPoster.masterPicture];
  let photos = masterPhoto ? [masterPhoto] : [];
  validPhotos.forEach((item) => {
    if (item !== masterPhoto) {
      photos.push(item)
    }
  });

  posterSave = {
    photos: photos,
    phone: phone,
    location: createPoster.location,
    name: createPoster.name.value,
    price: createPoster.price.value,
    area: createPoster.area.value,
    typePoster: createPoster.typePoster,
    typeSales: createPoster.typeSales,
    fullAddress: createPoster.fullAddress,
    city: createPoster.city,
    callTime: {
      from: createPoster.callFrom,
      to: createPoster.callTo,
    }
  };


  if (contacts && contacts.length > 0) {
    posterSave.contacts = contacts;
  }

  if (createPoster.comfort && createPoster.comfort.length > 0) {
    posterSave.comfort = createPoster.comfort
  }

  if (createPoster.conditionsRent && createPoster.conditionsRent.length > 0) {
    posterSave.conditionsRent = createPoster.conditionsRent
  }

  if (createPoster.description.length > 0) {
    posterSave.description = createPoster.description
  }

  /* ----------- */


  if (createPoster.legalName.valid) {
    posterSave.legalName = createPoster.legalName.value
  }

  if (createPoster.unp.valid) {
    posterSave.unp = createPoster.unp.value
  }

  if (createPoster.livingArea.valid) {
    posterSave.livingArea = createPoster.livingArea.value
  }

  if (createPoster.kitchenArea.valid) {
    posterSave.kitchenArea = createPoster.kitchenArea.value
  }

  if (createPoster.landArea.valid) {
    posterSave.landArea = createPoster.landArea.value
  }

  if (createPoster.countFloors.valid) {
    posterSave.countFloors = createPoster.countFloors.value
  }

  if (createPoster.floor.valid) {
    posterSave.floor = createPoster.floor.value
  }

  if (createPoster.ceilingHeight.valid) {
    posterSave.ceilingHeight = createPoster.ceilingHeight.value
  }

  if (createPoster.yearOfConstruction.valid) {
    posterSave.yearOfConstruction = createPoster.yearOfConstruction.value
  }

  if (createPoster.countRoomsInput.valid) {
    posterSave.countRooms = createPoster.countRoomsInput.value;
  }

  /* -------------- */

  if (createPoster.kind !== "land" && createPoster.kind !== "room") {
    posterSave.state = createPoster.state
  }

  if (createPoster.kind !== "land" && createPoster.kind !== "commercial") {
    posterSave.wallMaterial = createPoster.wallMaterial
  }

  if (createPoster.kind === "flat") {
    posterSave.typeApartment = createPoster.typeApartment
  }

  if (createPoster.kind === "flat") {
    posterSave.parkingPlace = createPoster.parkingPlace
  }

  if (createPoster.kind === "flat") {
    posterSave.loggia = createPoster.loggia === "yes"
  }

  if (createPoster.kind === "flat") {
    posterSave.combineKitchen = createPoster.combineKitchen === "yes"
  }

  if (createPoster.kind === "house" || createPoster.kind === "dacha") {
    posterSave.shed = createPoster.shed === "yes"
  }

  if (createPoster.kind === "commercial") {
    posterSave.typeCommercial = createPoster.typeCommercial
  }

  if (createPoster.kind === "shed" || createPoster.kind === "dacha" || createPoster.kind === "house") {
    posterSave.countSeatsShed = createPoster.countSeatsShed === "4+" ? 4 : Number(createPoster.countSeatsShed)
  }

  if (createPoster.kind === "flat") {
    posterSave.countRooms = createPoster.countRooms === "6+" ? 6 : Number(createPoster.countRooms);
  }

  return posterSave
};

export const getFilter = ({state, kind}) => {
  let result;

  if (kind === 'flat') {
    const sorted = state.countRooms ? state.countRooms.sort() : null;
    result = {
      type: 'flat',
      typePoster: state.typePoster,
      priceFrom: state.priceFrom,
      priceTo: state.priceTo,
      areaFrom: state.areaFrom,
      areaTo: state.areaTo,
      countRoomsFrom: state.countRooms ? parseInt(parseInt(sorted[0], 10), 10) : null,
      countRoomsTo: state.countRooms ? parseInt(parseInt(sorted[sorted.length - 1], 10), 10) : null,
      countFloorsFrom: state.countFloorsFrom,
      countFloorsTo: state.countFloorsTo,
      countFloorFrom: state.countFloorFrom,
      countFloorTo: state.countFloorTo,
      yearOfConstructionFrom: state.yearOfConstructionFrom,
      yearOfConstructionTo: state.yearOfConstructionTo,
      kitchenAreaFrom: state.kitchenAreaFrom,
      kitchenAreaTo: state.kitchenAreaTo,
      typeApartment: state.typeApartment,
      wallMaterial: state.wallMaterial,
    }
  }

  if (kind === 'house') {
    const sorted = state.countFloors ? state.countFloors.sort() : null;
    result = {
      type: 'house',
      typePoster: state.typePoster,
      state: state.state,
      wallMaterial: state.wallMaterial,
      priceFrom: state.priceFrom,
      priceTo: state.priceTo,
      areaFrom: state.areaFrom,
      areaTo: state.areaTo,
      livingAreaFrom: state.livingAreaFrom,
      livingAreaTo: state.livingAreaTo,
      landAreaFrom: state.landAreaFrom,
      landAreaTo: state.landAreaTo,
      countRoomsFrom: state.countRoomsFrom,
      countRoomsTo: state.countRoomsTo,
      countFloorsFrom: state.countFloors ? parseInt(parseInt(sorted[0], 10), 10) : null,
      countFloorsTo: state.countFloors ? parseInt(parseInt(sorted[sorted.length - 1], 10), 10) : null,
      yearOfConstructionFrom: state.yearOfConstructionFrom,
      yearOfConstructionTo: state.yearOfConstructionTo,
    }
  }

  if (kind === 'dacha') {
    const sorted = state.countFloors ? state.countFloors.sort() : null;
    result = {
      type: 'dacha',
      typePoster: state.typePoster,
      state: state.state,
      wallMaterial: state.wallMaterial,
      priceFrom: state.priceFrom,
      priceTo: state.priceTo,
      areaFrom: state.areaFrom,
      areaTo: state.areaTo,
      livingAreaFrom: state.livingAreaFrom,
      livingAreaTo: state.livingAreaTo,
      landAreaFrom: state.landAreaFrom,
      landAreaTo: state.landAreaTo,
      countRoomsFrom: state.countRoomsFrom,
      countRoomsTo: state.countRoomsTo,
      countFloorsFrom: state.countFloors ? parseInt(parseInt(sorted[0], 10), 10) : null,
      countFloorsTo: state.countFloors ? parseInt(parseInt(sorted[sorted.length - 1], 10), 10) : null,
      yearOfConstructionFrom: state.yearOfConstructionFrom,
      yearOfConstructionTo: state.yearOfConstructionTo,
    }
  }

  if (kind === 'commercial') {
    result = {
      type: 'commercial',
      typeCommercial: state.typeCommercial,
      typePoster: state.typePoster,
      state: state.state,
      priceFrom: state.priceFrom,
      priceTo: state.priceTo,
      areaFrom: state.areaFrom,
      areaTo: state.areaTo,
      yearOfConstructionFrom: state.yearOfConstructionFrom,
      yearOfConstructionTo: state.yearOfConstructionTo,
    }
  }

  if (kind === 'shed') {
    const sorted = state.countSeatsShed ? state.countSeatsShed.sort() : null;

    result = {
      type: 'shed',
      typePoster: state.typePoster,
      state: state.state,
      wallMaterial: state.wallMaterial,
      countSeatsShedFrom: state.countSeatsShed ? parseInt(parseInt(sorted[0], 10), 10) : null,
      countSeatsShedTo: state.countSeatsShed ? parseInt(parseInt(sorted[sorted.length - 1], 10), 10) : null,
      priceFrom: state.priceFrom,
      priceTo: state.priceTo,
      areaFrom: state.areaFrom,
      areaTo: state.areaTo,
      yearOfConstructionFrom: state.yearOfConstructionFrom,
      yearOfConstructionTo: state.yearOfConstructionTo,
    }
  }

  if (kind === 'room') {
    result = {
      type: 'room',
      priceFrom: state.priceFrom,
      priceTo: state.priceTo,
      areaFrom: state.areaFrom,
      areaTo: state.areaTo,
    }
  }

  if (kind === 'land') {
    result = {
      type: 'land',
      typePoster: state.typePoster,
      priceFrom: state.priceFrom,
      priceTo: state.priceTo,
      areaFrom: state.areaFrom,
      areaTo: state.areaTo,
    }
  }

  return result;
};

export const getBrowser = () => {
  let result;
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
  {
    result = 'Opera';
  }
  else if(navigator.userAgent.indexOf("Edg") != -1 )
  {
    result = 'Edge';
  }
  else if(navigator.userAgent.indexOf("Chrome") != -1 )
  {
    result = 'Chrome';
  }
  else if(navigator.userAgent.indexOf("Safari") != -1)
  {
    result = 'Safari';
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1 )
  {
    result = 'Firefox';
  }
  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
  {
    result = 'IE';
  }
  else
  {
    result = 'unknown';
  }
  return result;
};

