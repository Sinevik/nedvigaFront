import React from 'react';
import styled from 'styled-components';
import {cities} from '../../../../components/addСoord/cities/Cities';
import {useHistory} from "react-router-dom";

const Container = styled.div`
  width: 150px;
  background: #FFFFFF;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 5;
  padding: 18px;
`;

const Item = styled.p`
  width: 100%;
  cursor: pointer;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #000000;
  padding: 5px;
  &:hover {
    color: #FFFFFF;
    background: #1E8161;
  }
`;


const List = ({arrayValues}) => {
  const history = useHistory();
  const handlerLink = ({lat, lng}) => {
    history.push(`/posters/flat/${lat}/${lng}`);
    history.go();
  };

  const content = arrayValues.map((item, index) => {
    const city = cities.find((area) => area.label === item);
    return (
      <Item
        key={index}
        onClick={(e) => {
          e.stopPropagation();
          handlerLink({lat: city?.lat, lng: city?.lng});
        }}
      >
        {city?.label || 'nothing'}
      </Item>
    );
  });
  return (
    <Container>
      {content}
    </Container>
  );
};

export default List;
