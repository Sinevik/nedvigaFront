import {useMedia} from 'react-media';
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../redux/Actions';

const FirmsHook = (
    {
      match,
    },
) => {
  const firstRender = useRef(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [mobileView, setMobileView] = useState('desktop');
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 800px)',
  };
  const {
    selectedFirmMap,
    sideEffectsMap,
    sideEffectsFirmsMap,
  } = useSelector((state) => state.firms);

  const {
    centerMap,
  } = useSelector((state) => state.storage);
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});

  const {
    getFirms,
    getFirmsMap,
    setSelectedFirmMap,
    setInitState,
  } = Actions('firms')(useDispatch());

  const closeFirm = () => {
    setSelectedFirmMap(null);
  };
  const handlerSetFirm = (poster) => {
    console.log(poster);
  };

  const switchFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  useEffect(() => {
    getFirmsMap(match.params.type);
    getFirms(match.params.type);
  }, [centerMap]);

  useEffect(() => () => setInitState(), []);

  useEffect(() => {
    if (small) {
      document.body.classList.add('prevent-scroll');
      document.getElementById('seo').style.display = 'block';
      document.getElementById('footer').style.display = 'none';
    }
    return () => {
      document.body.classList.remove('prevent-scroll');
      document.getElementById('seo').style.display = 'block';
      document.getElementById('footer').style.display = 'block';
    };
  }, []);

  return {
    small,
    mobileView,
    fullScreen,
    selectedFirmMap,
    sideEffectsFirmsMap,
    sideEffectsMap,
    switchFullScreen,
    closeFirm,
    handlerSetFirm,
    setMobileView,
  };
};


export default FirmsHook;
