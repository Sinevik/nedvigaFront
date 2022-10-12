import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import MapView from '../map/MapView';
import ListFirmsView from '../listFirms/ListFirmsView';
import Firm from '../firm';
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

const ContainerFirms = styled.div`
    width: 100%;
    height: 100%;
`;

const ContainerPoster = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background: white;
`;

const WrapperGoToFirms = styled.div`
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
    height: 10vh;
    padding: 0px 15px 0px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const WrapperCloseFirm = styled.div`
    position: absolute;
    z-index: 1;
    height: 20px;
    width: 20px;
    top: 3px;
    right: 5px;
    cursor: pointer;
`;

const ContainerCloseFirm = styled.div`
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

const GetContentFirms = (
    {
      closeFirm,
      handlerSetFirm,
      selectedFirmMap,
      sideEffectsFirmsMap,
    },
) => {
  const getContent = (selected, sideEffect, handlerSetFirm) => {
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
    <ContainerPoster>
      {getContent(
          selectedFirmMap,
          sideEffectsFirmsMap,
          handlerSetFirm)}
      <ContainerCloseFirm
        onClick={(e) => {
          e.stopPropagation();
          closeFirm();
        }}
      >
        <WrapperCloseFirm>
          <Icon name="close"/>
        </WrapperCloseFirm>
      </ContainerCloseFirm>
    </ContainerPoster>
  );
};


const Mobile = (
    {
      mobileView,
      fullScreen,
      selectedFirmMap,
      sideEffectsFirmsMap,
      closeFirm,
      handlerSetFirm,
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
            fullScreen={false}
          />
          {sideEffectsFirmsMap || selectedFirmMap?.length > 0 ? (
            <GetContentFirms
              fullScreen={fullScreen}
              closeFirm={closeFirm}
              handlerSetFirm={handlerSetFirm}
              selectedFirmMap={selectedFirmMap}
              sideEffectsFirmsMap={sideEffectsFirmsMap}
            />
          ) : null}
          <WrapperGoToFirms onClick={() => setMobileView('desktop')}>
            <WrapperImage>
              <IconMap name="back"/>
            </WrapperImage>
          </WrapperGoToFirms>
        </ContainerMap>
      ) : (
        <ContainerFirms>
          <WrapperGoToMap>
            <Button
              borderRadius="4px"
              hook="parent"
              value="search-by-address"
              width="100%"
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
          <ListFirmsView
            screen="mobile"
            handlerSetFirm={handlerSetFirm}
          />
        </ContainerFirms>
      )}
    </Container>
  );
};

export default Mobile;

