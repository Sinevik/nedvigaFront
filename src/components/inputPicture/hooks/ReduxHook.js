/* eslint no-console: "off" */
import {useState} from 'react';
import md5 from 'md5';
import {deletePictures, uploadPictures} from '../../../service/uploadImages';

const generatorId = (userId) => {
  const date = Date.now();
  const result = userId + date;
  return md5(result);
};

const setValueReduxPictures = (pictures, title, path) => {
  const newReduxPictures = [];
  pictures.forEach((currentValue) => {
    if (currentValue.title === title) {
      const newValue = {
        title,
        path,
      };
      newReduxPictures.push(newValue);
    } else {
      newReduxPictures.push(currentValue);
    }
  });
  return newReduxPictures;
};

const setValueReduxDeletePictures = (pictures, path) => {
  const newReduxPictures = [];
  pictures.forEach((currentValue) => {
    if (currentValue.path === path) {
      const newValue = {
        title: currentValue.title,
        path: null,
      };
      newReduxPictures.push(newValue);
    } else {
      newReduxPictures.push(currentValue);
    }
  });
  return newReduxPictures;
};

export const ReduxHook = ({
  setPicture,
  reduxField,
  pictures,
  title,
  path,
}) => {
  const [spinner, setSpinner] = useState(false);


  const handlerUploadFile = (event) => {
    const PictureUid = generatorId('123fgdgdg');
    setSpinner(true);
    uploadPictures(event.target.files[0], PictureUid)
        .then((url) => {
          const reduxValue = setValueReduxPictures(pictures,
              title,
              url,
          );
          setPicture(reduxValue, reduxField);
          setSpinner(false);
        })
        .catch((error) => {
          console.log(error);
        });
  };


  const handlerDeleteFile = () => {
    setSpinner(true);
    deletePictures(path)
        .then(() => {
          const reduxValue = setValueReduxDeletePictures(pictures,
              path,
          );
          setPicture(reduxValue, reduxField);
          setSpinner(false);
        })
        .catch((error) => {
          console.log(error);
        });
  };


  return {
    spinner,
    handlerUploadFile,
    handlerDeleteFile,
  };
};
