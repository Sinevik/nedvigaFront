import React, {useState} from 'react';
import styled from 'styled-components';
import Loader from 'react-js-loader';
import MapView from '../map/MapView';
import ListPostersView from '../listPosters/ListPostersView';
import FilterView from '../filter/FilterView';
import Poster from '../poster';
import Slider from '../../../components/slider/Slider';
import {Icon as IconMap} from '../../../svg/map';
import {Icon} from '../../../svg/components';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    ${({fullScreen}) => {
    if (fullScreen) {
      return 'position: fixed; z-index: 2; top: 0; left: 0; width: 100%;';
    }
  }}
`;

const ContainerMap = styled.div`
    width: 100%;
    position: relative;
    overflow-y: hidden;
    height: ${({fullScreen}) => (fullScreen ? '100vh' : '50vh')};
`;

const Spacer = styled.div`
    width: 100%;
    height: 10px;
`;

const ContainerPosters = styled.div`
    width: ${({fullScreen}) => (fullScreen ? '800px' : '592px')};
    height: ${({fullScreen}) => (fullScreen ? '132px' : '100px')};
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: white;
    position: absolute;
    left: 0; 
    bottom: 0;
    right: 0; 
    text-align: center;
`;

const Stub = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: grey;
    opacity: 0.5;
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 0px;
`;

const ContainerLoader = styled.div`
    position: absolute;
    z-index: 1;
    top: 40%;
    left: 45%;
`;

const WrapperFullScreen = styled.div`
    position: absolute;
    cursor: pointer;
    z-index: 2;
    height: 24px;
    width: 24px;
    bottom: 40px;
    right: 12px;
    outline: none;
`;

const WrapperImage = styled.div`
    width: 100%;
    height: 100%;
`;

const WrapperClosePoster = styled.div`
    position: absolute;
    z-index: 1;
    height: 20px;
    width: 20px;
    top: 6px;
    right: 6px;
    cursor: pointer;
`;

const WrapperPosters = styled.div`
    width: 100%;
    padding: 30px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ContentPosters = styled.div`
    width: 100%;
`;

const GetContentPosters = (
    {
      fullScreen,
      type,
      closePoster,
      handlerBookmark,
      postersBookmark,
      handlerSetPoster,
      selectedPosterMap,
      sideEffectsPostersMap,
    },
) => {
  const [hoverClose, setHoverClose] = useState(false);
  const getContent = (selected, sideEffect, handlerPoster, type) => {
    let result;

    if (sideEffect) {
      result = (
        <Loader
          type="spinner-circle"
          bgColor="#1C7F62"
          size={50}
        />
      );
    } else if (selected === null) {
      result = null;
    } else if (selected && selected.length === 1) {
      result = (
        <Poster
          trim={40}
          slider
          handlerBookmark={handlerBookmark}
          postersBookmark={postersBookmark}
          type={type}
          id={selected[0]._id}
          price={selected[0].price}
          area={selected[0].area}
          city={selected[0].city}
          fullAddress={selected[0].fullAddress}
          description={selected[0].description}
          img={selected[0].photos[0]}
          poster={selected[0]}
          handlerClick={handlerPoster}
          map={true}
        />
      );
    } else if (selected && selected.length > 1) {
      result = (
        <Slider>
          {selected.map((item, index) => (
            <Poster
              type={type}
              id={item._id}
              handlerBookmark={handlerBookmark}
              postersBookmark={postersBookmark}
              slider
              trim={40}
              key={index}
              price={item.price}
              area={item.area}
              city={item.city}
              fullAddress={item.fullAddress}
              description={item.description}
              img={item.photos[0]}
              poster={item}
              handlerClick={handlerPoster}
              map={true}
            />
          ))}
        </Slider>
      );
    }

    return result;
  };
  return (
    <ContainerPosters
      fullScreen={fullScreen}
    >
      {getContent(
          selectedPosterMap,
          sideEffectsPostersMap,
          handlerSetPoster,
          type,
      )}
      <WrapperClosePoster
        onClick={() => {
          setHoverClose(false);
          closePoster();
        }}
        onMouseOver={() => setHoverClose(true)}
        onMouseLeave={() => setHoverClose(false)}
      >
        <Icon hover={hoverClose} name="close"/>
      </WrapperClosePoster>
    </ContainerPosters>
  );
};


const Desktop = (
    {
      fullScreen,
      type,
      handlerBookmark,
      postersBookmark,
      selectedPosterMap,
      sideEffectsMap,
      switchFullScreen,
      sideEffectsPostersMap,
      closePoster,
      handlerSetPoster,
    },
) => (
  <Container fullScreen={fullScreen}>
    <ContainerMap fullScreen={fullScreen}>
      <MapView fullScreen={fullScreen}/>
      {sideEffectsMap ? (
        <React.Fragment>
          <Stub/>
          <ContainerLoader>
            <Loader
              type="spinner-circle"
              bgColor="#1C7F62"
              size={100}
            />
          </ContainerLoader>
        </React.Fragment>
      ) : null}
      {sideEffectsPostersMap || selectedPosterMap?.length > 0 ? (
        <GetContentPosters
          type={type}
          handlerBookmark={handlerBookmark}
          postersBookmark={postersBookmark}
          fullScreen={fullScreen}
          closePoster={closePoster}
          handlerSetPoster={handlerSetPoster}
          selectedPosterMap={selectedPosterMap}
          sideEffectsPostersMap={sideEffectsPostersMap}
        />
      ) : null}
      <WrapperFullScreen onClick={switchFullScreen}>
        <WrapperImage>
          <IconMap name={fullScreen ? 'rollup' : 'expand'}/>
        </WrapperImage>
      </WrapperFullScreen>
    </ContainerMap>
    <Spacer/>
    <FilterView
      fullScreen={fullScreen}
    />
    {!fullScreen ? (
      <WrapperPosters>
        <ContentPosters>
          <ListPostersView
            type={type}
            handlerSetPoster={handlerSetPoster}
            handlerBookmark={handlerBookmark}
            postersBookmark={postersBookmark}
          />
        </ContentPosters>
      </WrapperPosters>
    ) : null}
  </Container>
);

export default Desktop;
