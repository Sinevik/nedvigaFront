/* eslint-disable max-len */
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateUrl = (val) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !pattern.test(val);
};


const validate = (val, rule) => {
  let isValid;
  switch (rule) {
    case 'area':
      isValid = areaValidator(val);
      break;
    case 'floor':
      isValid = floorValidator(val);
      break;
    case 'room':
      isValid = roomValidator(val);
      break;
    case 'ceilingHeight':
      isValid = ceilingHeight(val);
      break;
    case 'yearOfConstruction':
      isValid = yearOfConstruction(val);
      break;
    case 'price':
      isValid = price(val);
      break;
    case 'phone':
      isValid = phoneValidator(val);
      break;
    case 'phoneRest':
      isValid = phoneValidatorRest(val);
      break;
    case 'empty':
      isValid = emptyValidator(val);
      break;
    case 'password':
      isValid = passwordValidator(val);
      break;
    case 'houseRoomsNumber':
      isValid = houseRoomsNumber(val);
      break;
    case 'email':
      isValid = emailValidator(val);
      break;
    case 'nickName':
      isValid = nickNameValidator(val);
      break;
    case 'url':
      isValid = urlValidator(val);
      break;
    default:
      isValid = false;
  }
  return isValid;
};

const areaValidator = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case !/^\d+$/.test(val):
      return 'the-value-must-be-an-integer';
    default:
      return false;
  }
};


const floorValidator = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case !/^\d+$/.test(val):
      return 'the-value-must-be-an-integer';
    case parseInt(val, 10) > 100:
      return 'too-much-value';
    default:
      return false;
  }
};

const roomValidator = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case !/^\d+$/.test(val):
      return 'the-value-must-be-an-integer';
    case parseInt(val, 10) > 100:
      return 'too-much-value';
    default:
      return false;
  }
};

const ceilingHeight = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case !/^\d+$/.test(val):
      return 'the-value-must-be-an-integer';
    case parseInt(val, 10) > 30:
      return 'too-much-value';
    default:
      return false;
  }
};

const yearOfConstruction = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case !/^\d+$/.test(val):
      return 'the-value-must-be-an-integer';
    case parseInt(val, 10) > 2028 || parseInt(val, 10) < 1900:
      return 'specify-the-year-from-1900-to-2028';
    default:
      return false;
  }
};

const price = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case !/^\d+$/.test(val):
      return 'the-value-must-be-an-integer';
    default:
      return false;
  }
};

const phoneValidator = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case !/^\d+$/.test(val.substring(1, 3)) || !/^\d+$/.test(val.substring(5, 7)) || !/^\d+$/.test(val.substring(8, 15)):
      return 'phone-format:-+375XX XXX XX XX';
    default:
      return false;
  }
};

const phoneValidatorRest = (val) => {
  switch (true) {
    case !/^\d+$/.test(val.substring(1, 3)) || !/^\d+$/.test(val.substring(5, 7)) || !/^\d+$/.test(val.substring(8, 15)):
      return 'phone-format:-+375XX XXX XX XX';
    default:
      return false;
  }
};


const emptyValidator = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    default:
      return false;
  }
};

const houseRoomsNumber = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case !/^\d+$/.test(val):
      return 'the-value-must-be-an-integer';
    default:
      return false;
  }
};

const emailValidator = (val) => {
  switch (true) {
    case !validateEmail(val):
      return 'invalid-email-format';
    default:
      return false;
  }
};

const passwordValidator = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case val.length < 7:
      return 'the-password-cannot-be-less-than-6-characters';
    case val.length > 30:
      return 'the-password-cannot-be-more-than-30';
    case val.toLowerCase().includes('password'):
      return 'the-password-cannot-include-the-word-password';
    default:
      return false;
  }
};

const nickNameValidator = (val) => {
  const re = /[^a-z ]/i;
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case re.test(String(val).toLowerCase()):
      return 'latin-characters-only';
    case val.length > 20:
      return 'too-much-value';
    default:
      return false;
  }
};

const urlValidator = (val) => {
  switch (true) {
    case val.length === 0:
      return 'the-field-is-required-to-fill-in';
    case val.length > 150:
      return 'too-much-value';
    case validateUrl(val):
      return 'invalid-url-format';
    default:
      return false;
  }
};

export default validate;
