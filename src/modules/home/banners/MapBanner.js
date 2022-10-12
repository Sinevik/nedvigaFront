import React from 'react';
import styled from 'styled-components';
import {useMedia} from 'react-media';
import {Icon} from '../../../svg/banners';
import {useTranslation} from 'react-i18next';
import Button from '../../../components/button/Button';

const Container = styled.div`
    width: 100%;
    background: linear-gradient(97.4deg, #F5FAFF 0%, #F5FFF5 52.65%);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;
`;

const PlugSecond = styled.div`
    position: absolute;
    background: linear-gradient(97.4deg, #F5FAFF 0%, #F5FFF5 52.65%);
    width: 50%;
    height: 140%;
    z-index: 1;
    top: 0;
    left: -10%;
    transform: skew(-28deg);
    @media (max-width: 800px) {
      width: 60%;
  }
`;

const PlugFirst = styled.div`
    width: 70%;
    height: 100%;
    background: ${({rndInt}) => rndInt === 0 ? 'linear-gradient(90deg, #EFEFEF 15.81%, #D4D4D4 100%)' : 'linear-gradient(90deg, #FFEBC2 15.81%, #FFCB68 100%)'};
    @media (max-width: 800px) {
      width: 60%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
`;

const Title = styled.div`
  margin: 0px;
  padding: 0px;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: right;
  color: #000000;
  @media (max-width: 1024px) {
    font-size: 13px;
  }
  
`;

const WrapperIcon = styled.div`
  width: 350px;
  height: 240px;
   @media (max-width: 1024px) {
    width: 200px;
    height: 140px;
  }
  @media (max-width: 800px) {
    width: 160px;
    height: 110px;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  padding: ${({padding}) => padding || '0px'};
  align-items: flex-end;
  @media (max-width: 800px) {
    width: 55%;
  }
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 45%;
  }
`;

const WrapperButton = styled.div`
  padding: 26px 0px 0px 0px;
  @media (max-width: 1024px) {
    padding: 0px 0px 0px 0px;
  }
`;

const MapBanner = (
    {
      handlerCLick,
      rndInt,
    },
) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const {t} = useTranslation();
  return (
    <Container>
      <PlugFirst rndInt={rndInt}/>
      <PlugSecond/>
      <Content>
        <LeftSide padding={small ? '0px 0px 10px 2px' : '0px 0px 0px 60px'}>
          <WrapperIcon>
            <Icon name={rndInt === 0 ? 'mapFirst' : 'mapSecond'}/>
          </WrapperIcon>
        </LeftSide>
        <RightSide>
          <Title>
            {t('map-search')}
          </Title>
          <WrapperButton>
            <Button
              value='watch'
              width={small ? '100px' : '160px'}
              height={small ? '25px' : '36px'}
              borderRadius='4px'
              fontSize={small ? '8px' : '15px'}
              backgroundColor="#1C7F62"
              cursor="pointer"
              onFocusColor="#43B949"
              fontColor="#F9F9FB"
              onFocusFontColor="#F9F9FB"
              boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
              reducer="auth"
              hook="parent"
              parentFunction={() => handlerCLick('flat')}
              fieldsCheckForDisabled={[true]}
            />
          </WrapperButton>
        </RightSide>
      </Content>
    </Container>
  );
};

export default MapBanner;

/* <WrapperIcon>
        <Icon name="map" />
      </WrapperIcon>*/
