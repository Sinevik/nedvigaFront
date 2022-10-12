const prepareForEdit = (user) => {
  const newState = {
    avatar: [
      {
        title: 0,
        path: user.avatar || null,
      },
    ],
    firstName: {value: user.firstName, valid: true, warning: null},
    lastName: {value: user.lastName || null, valid: !!user.lastName, warning: null},
    email: {value: user.publicEmail || null, valid: !!user.publicEmail, warning: null},
    webSite: {value: user.webSite || null, valid: !!user.webSite, warning: null},
    phone: user.phone ? user.phone.map((phone) => {
      return {
        value: phone, valid: true, warning: null,
      };
    }) : [
      {
        value: null, valid: false, warning: null,
      },
    ],
    contacts: user.contacts ? user.contacts.map((contact) => {
      return [
        {value: contact.method, valid: true, warning: null},
        {value: contact.path, valid: true, warning: null},
      ];
    }) : [],
  };
  return newState;
};


export default prepareForEdit;
