/* eslint no-console: "off" */
import {useEffect, useRef, useState} from 'react';
import {deletePictures, uploadPictures} from '../../../service/uploadImages';
import md5 from 'md5';


const generatorId = (userId) => {
  const date = Date.now();
  const result = userId + date;
  return md5(result);
};

const setValueReduxDeletePictures = (pictures, title) => {
  const newReduxPictures = pictures.filter((item) => item.title !== title);
  return newReduxPictures;
};

export const ReduxHook = ({
  setMasterPicture,
  setPathPictures,
  setPictures,
  reduxField,
  pictures,
  t,
}) => {
  const drop = useRef(null);
  const [spinner, setSpinner] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const handlerUploadFile = (e) => {
    if ((pictures.length + e.target.files.length) > 10) {
      alert(t(`maximum-number-of-10-files`));
    } else {
      const newPictures = [...pictures];
      [...new Array(e.target.files.length)].forEach((item, index) => {
        const title = Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        newPictures.push({
          title,
          path: null,
        });
      });
      setPictures([...newPictures], reduxField);
      setFiles(e.target.files);
      setDragging(false);
    }
  };

  const apiUpload = async (file) => {
    const PictureUid = generatorId(`${Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)}`);
    uploadPictures(file, PictureUid)
        .then((url) => {
          console.log('here', url, PictureUid);
          setPathPictures(url, reduxField);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const apiDelete = async (item) => {
    setSpinner(true);
    deletePictures(item.path)
        .then(() => {
          const reduxValue = setValueReduxDeletePictures(pictures,
              item.title,
          );
          setPictures(reduxValue, reduxField);
          setSpinner(false);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const handlerDeleteFile = (item) => {
    apiDelete(item);
  };

  const handlerMasterPicture = (index) => {
    setMasterPicture(index);
  };


  const saveImages = () => {
    const promises = [];
    [...new Array(files.length)].forEach((item, index) => {
      const promis = apiUpload(files[index]);
      promises.push(promis);
    });
    Promise.all(promises);
  };

  useEffect(() => {
    saveImages();
  }, [files]);

  useEffect(() => {
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);
    drop.current.addEventListener('dragenter', handleDragEnter);
    drop.current.addEventListener('dragleave', handleDragLeave);

    return () => {
      drop.current.removeEventListener('dragover', handleDragOver);
      drop.current.removeEventListener('drop', handleDrop);
      drop.current.removeEventListener('dragenter', handleDragEnter);
      drop.current.removeEventListener('dragleave', handleDragLeave);
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {files} = e.dataTransfer;
    if (!pictures.some((item) => item.path === null)) {
      handlerUploadFile({
        target: {
          files,
        },
      });
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };

  return {
    drop,
    dragging,
    spinner,
    handlerMasterPicture,
    handlerUploadFile,
    handlerDeleteFile,
  };
};
