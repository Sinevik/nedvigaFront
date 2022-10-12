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

const prepareForEdit = (store) => {
  const newState = {
    edit: store._id,
    avatar: [
      {
        title: 0,
        path: store.avatar || null,
      },
    ],
    unpPhoto: [
      {
        title: 0,
        path: store.unpPhoto || null,
      },
    ],
    phone: store.phone ? store.phone.map((phone) => {
      return {
        value: phone, valid: true, warning: null,
      };
    }) : [
      {
        value: null, valid: false, warning: null,
      },
    ],
    contacts: store.contacts ? store.contacts.map((contact) => {
      return [
        {value: contact.method, valid: true, warning: null},
        {value: contact.path, valid: true, warning: null},
      ];
    }) : [],
    unp: {value: store.unp || null, valid: !!store.unp, warning: null},
    email: {value: store.email || null, valid: !!store.email, warning: null},
    legalName: {value: store.legalName || null, valid: !!store.legalName, warning: null},
    webSite: {value: store.webSite || null, valid: !!store.webSite, warning: null},
    pictures: getPictures(store),
    categories: [...store.categories],
    address: [...store.address],
    description: store.description,
  };
  return newState;
};


export default prepareForEdit;
