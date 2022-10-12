import React from 'react';
import styled from 'styled-components';
import HomeHook from './HomeHook';
import Categories from './categories/Categories';
import SliderPictures from '../../components/sliderPictures/SliderPicturesMain';
import Swiper from '../../components/swiper/Swiper';
import MapBanner from './banners/MapBanner';
import MarketBanner from './banners/MarketBanner';
import Plug from '../plug';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  width: 100%;
`;

const WrapperSwiper = styled.div`
  width: 100%;
  padding: 25px 0px 0px 0px;
`;

const Content = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;


const Home = ({history}) => {
  const {
    small,
    goTo,
    goToMarket,
  } = HomeHook();
  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const rndInt = randomIntFromInterval(0, 1);

  return (
    <Container>
      <Categories
        goTo={goTo}
        goToMarket={goToMarket}
      />
      <Content>
        <WrapperSwiper>
          {small ? (
            <Swiper
              width="100%"
              height='150px'
              arrayUri={[
                <MapBanner
                  key={0}
                  handlerCLick={goTo}
                  rndInt={rndInt}
                />,
                <MarketBanner
                  key={1}
                  handlerCLick={goToMarket}
                  rndInt={rndInt}
                />,
              ]}
            />
          ) : (
            <SliderPictures
              width="100%"
              height="260px"
              speed={1000}
              advanced={false}
              arrayUri={[
                <MapBanner
                  key={0}
                  handlerCLick={goTo}
                  rndInt={rndInt}
                />,
                <MarketBanner
                  key={1}
                  handlerCLick={goToMarket}
                  rndInt={rndInt}
                />,
              ]}
            />
          )}
        </WrapperSwiper>
      </Content>
      <Plug history={history} />
    </Container>
  );
};


export default Home;
