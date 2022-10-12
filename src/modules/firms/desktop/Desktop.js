import React, {useState} from 'react';
import styled from 'styled-components';
import Loader from 'react-js-loader';
import MapView from '../map/MapView';
import ListPostersView from '../listFirms/ListFirmsView';
import Firm from '../firm';
import Slider from '../../../components/slider/Slider';
import {Icon as IconMap} from '../../../svg/map';
import {Icon} from '../../../svg/components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    ${({fullScreen}) => {
    if (fullScreen) {
      return 'position: fixed; top: 0; z-index: 2; left: 0; width: 100%;';
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

const ContainerFirms = styled.div`
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
    margin-left: auto; 
    margin-right: auto; 
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

const WrapperCloseFirm = styled.div`
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

const GetContentFirms = (
    {
      fullScreen,
      closeFirm,
      handlerSetFirm,
      selectedFirmMap,
      sideEffectsFirmsMap,
    },
) => {
  const [hoverClose, setHoverClose] = useState(false);
  const getContent = (selected, sideEffect, handlerSetFirm) => {
    let result;

    if (sideEffect) {
      result = (
        <Loader
          type="spinner-circle"
          bgColor="#1C7F62"
          size={50}
        />
      );
    } else if (selected && selected.length === 1) {
      result = (
        <Firm
          id={selected[0]._id}
          legalName={selected[0].legalName}
          fullAddress={selected[0].address[0].fullAddress}
          img={selected[0].avatar}
          firm={selected[0]}
          handlerClick={handlerSetFirm}
        />
      );
    } else if (selected && selected.length > 1) {
      result = (
        <Slider>
          {selected.map((item, index) => (
            <Firm
              key={index}
              id={item._id}
              legalName={item.legalName}
              fullAddress={item.address[0].fullAddress}
              img={item.avatar}
              firm={item}
              handlerClick={handlerSetFirm}
            />
          ))}
        </Slider>
      );
    }

    return result;
  };
  return (
    <ContainerFirms
      fullScreen={fullScreen}
    >
      {getContent(
          selectedFirmMap,
          sideEffectsFirmsMap,
          handlerSetFirm,
      )}
      <WrapperCloseFirm
        onClick={(e) => {
          e.stopPropagation();
          setHoverClose(false);
          closeFirm();
        }}
        onMouseOver={() => setHoverClose(true)}
        onMouseLeave={() => setHoverClose(false)}
      >
        <Icon hover={hoverClose} name="close"/>
      </WrapperCloseFirm>
    </ContainerFirms>
  );
};


const Desktop = (
    {
      small,
      fullScreen,
      selectedFirmMap,
      sideEffectsMap,
      switchFullScreen,
      sideEffectsFirmsMap,
      closeFirm,
      handlerSetFirm,
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
      {sideEffectsFirmsMap || selectedFirmMap?.length > 0 ? (
        <GetContentFirms
          fullScreen={fullScreen}
          closeFirm={closeFirm}
          handlerSetFirm={handlerSetFirm}
          selectedFirmMap={selectedFirmMap}
          sideEffectsFirmsMap={sideEffectsFirmsMap}
        />
      ) : null}
      <WrapperFullScreen onClick={switchFullScreen}>
        <WrapperImage>
          <IconMap name={fullScreen ? 'rollup' : 'expand'}/>
        </WrapperImage>
      </WrapperFullScreen>
    </ContainerMap>
    <Spacer/>
    {!fullScreen ? (
      <WrapperPosters>
        <ContentPosters>
          <ListPostersView
            handlerSetFirm={handlerSetFirm}
          />
        </ContentPosters>
      </WrapperPosters>
    ) : null}
  </Container>
);

export default Desktop;


/**/
