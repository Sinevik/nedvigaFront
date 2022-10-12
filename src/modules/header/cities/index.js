import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../../../svg/dropDown';
import {cities} from '../../../components/addСoord/cities/Cities';
import List from './list';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
  width: 80px; 
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center; 
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Paragraph = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #000000;
`;

const WrapperImage = styled.div`
  width: 16px;
  height: 16px;
  padding: 0px;
`;


const Cities = ({capital, arrayValues}) => {
  const history = useHistory();
  const [hover, setHover] = useState(false);
  const city = cities.find((area) => area.label === capital);
  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        history.push(`/posters/flat/${city.lat}/${city.lng}`);
        history.go();
      }}
    >
      <Paragraph>
        {capital}
      </Paragraph>
      <WrapperImage>
        <Icon name="cities"/>
      </WrapperImage>
      {hover ? (
        <List
          arrayValues={arrayValues}
        />
      ) : null}
    </Container>
  );
};

export default Cities;
