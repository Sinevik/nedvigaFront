import React from 'react';
import styled from 'styled-components';
import MapHook from './MapHook';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: white;
`;

const WrapperMap = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: default;
`;


const MapView = (
    {
      location,
    },
) => {
  const loc = {
    lat: location.coordinates[0],
    lng: location.coordinates[1],
  };
  MapHook({
    loc,
  });

  return (
    <Container>
      <WrapperMap id="map"/>
    </Container>
  );
};

export default MapView;
