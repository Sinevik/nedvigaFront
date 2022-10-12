import axios from 'axios';

const getIdFromUrl = (path) => {
  const string = path;

  const from = string.lastIndexOf('/');

  const to = string.lastIndexOf('.');

  const result = string.substring(from + 1, to);

  return result;
};

export const uploadPictures = async (path, PictureUid) => {
  if (path && PictureUid) {
    const form = new FormData();
    form.append('file', path);
    form.append('id', PictureUid);
    try {
      const result = await axios.post(`
    ${process.env.REACT_APP_API_URL}/upload`, form);
      return result.data.url;
    } catch (e) {
      throw e;
    }
  }
};

export const deletePictures = async (path) => {
  if (path) {
    const id = getIdFromUrl(path);
    try {
      const result = await axios.post(`
    ${process.env.REACT_APP_API_URL}/deleteLoaded`, {
        id,
      });
      return result.data.status;
    } catch (e) {
      throw e;
    }
  }
};
