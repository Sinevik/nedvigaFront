import {useMedia} from 'react-media';
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../redux/Actions';

const PostersHook = (
    {
      match,
    },
) => {
  const [idTimeout, setTime] = useState(null);
  const firstRender = useRef(false);
  const firstRenderFromTo = useRef(false);
  const firstRenderTypePoster = useRef(false);
  const firstRenderPageNumber = useRef(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [mobileView, setMobileView] = useState('desktop');
  const [openFilterM, setOpenFilter] = useState(false);
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 800px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const {
    addPosterBookmark,
    deletePosterBookmark,
  } = Actions('storage')(useDispatch());
  const postersBookmark = useSelector((state) => state.storage.postersBookmark);

  const handlerBookmark = (id) => {
    if (postersBookmark.includes(id)) {
      deletePosterBookmark(id);
    } else {
      addPosterBookmark(id);
    }
  };

  const {
    getPosters,
    getPostersMap,
    setInitState,
    setValueField,
    setPosters,
    setKind,
    setSelectedPosterMap,
  } = Actions('posters')(useDispatch());

  const {
    setCenterMap,
  } = Actions('storage')(useDispatch());

  const {
    setPoster,
  } = Actions('poster')(useDispatch());

  const {
    centerMap,
  } = useSelector((state) => state.storage);
  const {
    sideEffectsMap,
    typePoster,
  } = useSelector((state) => state.posters);

  const {
    state,
    countSeatsShed,
    typeApartment,
    typeCommercial,
    typeRent,
    wallMaterial,
    countRooms,
    countRoomsFrom,
    countRoomsTo,
    areaFrom,
    areaTo,
    landAreaFrom,
    landAreaTo,
    priceFrom,
    priceTo,
    countFloorFrom,
    countFloorTo,
    countFloors,
    countFloorsFrom,
    countFloorsTo,
    kitchenAreaFrom,
    kitchenAreaTo,
    yearOfConstructionFrom,
    yearOfConstructionTo,
  } = useSelector((state) => state.posters);

  const {
    selectedPosterMap,
    sideEffectsPostersMap,
    pageNumber,
  } = useSelector((state) => state.posters);

  const handlerSetPoster = (poster) => {
    setPoster(poster);
  };

  const switchFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  const switchFilterM = () => {
    setOpenFilter(!openFilterM);
  };

  const closePoster = () => {
    setSelectedPosterMap(null);
  };

  useEffect(() => {
    if (firstRender.current) {
      setSelectedPosterMap(null);
      getPostersMap();
      getPosters();
    } else {
      setKind(match.params.type);
      if (match.params.lat && match.params.lng) {
        setCenterMap({
          lat: match.params.lat,
          lng: match.params.lng,
        });
      }
      getPosters();
      getPostersMap({side:true});
      firstRender.current = true;
    }
  }, [
    state,
    countSeatsShed,
    typeApartment,
    typeCommercial,
    typeRent,
    wallMaterial,
    countRooms,
    countFloors,
  ]);

  useEffect(() => {
    if (firstRenderFromTo.current) {
      const filter = {
        state,
        countSeatsShed,
        typeApartment,
        typeCommercial,
        typeRent,
        wallMaterial,
        countRooms,
        countRoomsFrom,
        countRoomsTo,
        areaFrom,
        areaTo,
        landAreaFrom,
        landAreaTo,
        priceFrom,
        priceTo,
        countFloorFrom,
        countFloorTo,
        countFloors,
        countFloorsFrom,
        countFloorsTo,
        kitchenAreaFrom,
        kitchenAreaTo,
        yearOfConstructionFrom,
        yearOfConstructionTo,
      };
      setSelectedPosterMap(null);
      clearTimeout(idTimeout);

      const idTime = setTimeout(() => {
        getPostersMap({side:true});
        getPosters();
      }, 800);
      setTime(idTime);
    } else {
      firstRenderFromTo.current = true;
    }
  }, [
    countRoomsFrom,
    countRoomsTo,
    areaFrom,
    areaTo,
    landAreaFrom,
    landAreaTo,
    priceFrom,
    priceTo,
    countFloorFrom,
    countFloorTo,
    countFloorsFrom,
    countFloorsTo,
    kitchenAreaFrom,
    kitchenAreaTo,
    yearOfConstructionFrom,
    yearOfConstructionTo,
  ]);


  useEffect(() => {
    if (firstRenderTypePoster.current) {
      setInitState();
      closePoster();
      getPosters();
      getPostersMap({side:true});
    } else {
      firstRenderTypePoster.current = true;
    }
  }, [typePoster, centerMap]);

  useEffect(() => {
    if (firstRenderPageNumber.current) {
      getPosters();
    } else {
      firstRenderPageNumber.current = true;
    }
  }, [pageNumber]);

  useEffect(() => () => {
    setSelectedPosterMap(null);
    setPosters([]);
  }, []);

  useEffect(() => {
    if (small) {
      document.body.classList.add('prevent-scroll');
      document.getElementById('footer').style.display = 'none';
      document.getElementById('seo').style.display = 'none';
    }
    return () => {
      document.body.classList.remove('prevent-scroll');
      document.getElementById('seo').style.display = 'block';
      document.getElementById('footer').style.display = 'block';
    };
  }, []);

  return {
    closePoster,
    switchFullScreen,
    switchFilterM,
    handlerSetPoster,
    handlerBookmark,
    postersBookmark,
    small,
    openFilterM,
    setMobileView,
    mobileView,
    sideEffectsMap,
    selectedPosterMap,
    sideEffectsPostersMap,
    fullScreen,
  };
};


export default PostersHook;
