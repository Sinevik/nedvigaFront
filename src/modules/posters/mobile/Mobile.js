import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import MapView from '../map/MapView';
import ListPostersView from '../listPosters/ListPostersView';
import FilterView from '../filterM/FilterView';
import Poster from '../poster';
import Slider from '../../../components/slider/Slider';
import {Icon as IconMap} from '../../../svg/map';
import {Icon} from '../../../svg/components';
import Button from '../../../components/button/Button';

const Container = styled.div`
    width: 100%;
    height: ${({height}) => height - 66}px;
    overflow-y: hidden;
`;

const ContainerMap = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
    overflow-y: hidden;
    position: relative;
`;

const ContainerPosters = styled.div`
    width: 100%;
    height: 100%;
`;

const ContainerPoster = styled.div`
    width: 100%;
    height: 1px;
    min-height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background: white;
`;

const WrapperGoToPosters = styled.div`
    position: absolute;
    cursor: pointer;
    z-index: 2;
    height: 35px;
    width: 35px;
    top: 200px;
    left: 12px;
    outline: none;
`;

const WrapperImage = styled.div`
    width: 100%;
    height: 100%;
`;

const WrapperGoToMap = styled.div`
    width: 100%;
    height: 55px;
    padding: 0px 15px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const WrapperFilter = styled.div`
    height: 40px;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const WrapperIcon = styled.div`
    height: 24px;
    width: 24px;
`;

const ContainerClosePoster = styled.div`
    position: absolute;
    z-index: 1;
    height: 35px;
    width: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: -20px;
    right: 0px;
    background: #F9F9FB;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    cursor: pointer;
`;

const WrapperClosePoster = styled.div`
    width: 20px;
    height: 20px;
`;

const GetContentPosters = (
    {
      postersBookmark,
      handlerBookmark,
      type,
      closePoster,
      handlerSetPoster,
      selectedPosterMap,
      sideEffectsPostersMap,
    },
) => {
  const getContent = (selected, sideEffect, handlerPoster, type) => {
    let result;

    if (sideEffect) {
      result = (
        <Loader
          type="Oval"
          color="#1C7F62"
          height={20}
          width={20}
        />
      );
    } else if (selected && selected.length === 1) {
      result = (
        <Poster
          type={type}
          trim={50}
          postersBookmark={postersBookmark}
          handlerBookmark={handlerBookmark}
          id={selected[0]._id}
          price={selected[0].price}
          area={selected[0].area}
          city={selected[0].city}
          fullAddress={selected[0].fullAddress}
          description={selected[0].description}
          img={selected[0].photos[0]}
          poster={selected[0]}
          handlerClick={handlerPoster}
        />
      );
    } else if (selected && selected.length > 1) {
      result = (
        <Slider>
          {selected.map((item, index) => (
            <Poster
              type={type}
              trim={50}
              key={index}
              postersBookmark={postersBookmark}
              handlerBookmark={handlerBookmark}
              id={item._id}
              price={item.price}
              area={item.area}
              city={selected[0].city}
              fullAddress={item.fullAddress}
              description={item.description}
              img={item.photos[0]}
              poster={item}
              handlerClick={handlerPoster}
            />
          ))}
        </Slider>
      );
    }

    return result;
  };
  return (
    <ContainerPoster>
      {getContent(
          selectedPosterMap,
          sideEffectsPostersMap,
          handlerSetPoster,
          type)}
      <ContainerClosePoster
        onClick={(e) => {
          e.stopPropagation();
          closePoster();
        }}
      >
        <WrapperClosePoster>
          <Icon name="close"/>
        </WrapperClosePoster>
      </ContainerClosePoster>
    </ContainerPoster>
  );
};


const Mobile = (
    {
      mobileView,
      fullScreen,
      type,
      postersBookmark,
      handlerBookmark,
      openFilterM,
      selectedPosterMap,
      sideEffectsPostersMap,
      switchFilterM,
      closePoster,
      handlerSetPoster,
      setMobileView,
    },
) => {
  const [height, setHeight] = useState(window.innerHeight);
  const handlerResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);
  return (
    <Container height={height}>
      {mobileView === 'mobile' ? (
        <ContainerMap>
          <MapView
            handlerOpenFilter={switchFilterM}
            fullScreen={false}
          />
          {sideEffectsPostersMap || selectedPosterMap?.length > 0 ? (
            <GetContentPosters
              type={type}
              postersBookmark={postersBookmark}
              handlerBookmark={handlerBookmark}
              fullScreen={fullScreen}
              closePoster={closePoster}
              handlerSetPoster={handlerSetPoster}
              selectedPosterMap={selectedPosterMap}
              sideEffectsPostersMap={sideEffectsPostersMap}
            />
          ) : null}
          <WrapperGoToPosters onClick={() => setMobileView('desktop')}>
            <WrapperImage>
              <IconMap name="back"/>
            </WrapperImage>
          </WrapperGoToPosters>
        </ContainerMap>
      ) : (
        <ContainerPosters openFilterM={openFilterM}>
          <WrapperGoToMap>
            <WrapperFilter onClick={switchFilterM}>
              <WrapperIcon>
                <Icon name="filter"/>
              </WrapperIcon>
            </WrapperFilter>
            <Button
              borderRadius="4px"
              hook="parent"
              value="search-by-address"
              width="172px"
              height="32px"
              fontSize="15px"
              parentFunction={() => setMobileView('mobile')}
              backgroundColor="#1C7F62"
              cursor="pointer"
              onFocusColor="#43B949"
              fontColor="#F9F9FB"
              onFocusFontColor="#F9F9FB"
              boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
              fieldsCheckForDisabled={[true]}
            />
          </WrapperGoToMap>
          <ListPostersView
            type={type}
            screen="mobile"
            postersBookmark={postersBookmark}
            handlerBookmark={handlerBookmark}
            handlerSetPoster={handlerSetPoster}
          />
        </ContainerPosters>
      )}
      <FilterView
        open={openFilterM}
        closeFilter={switchFilterM}
      />
    </Container>
  );
};

export default Mobile;
