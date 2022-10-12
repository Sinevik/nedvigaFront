import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${({small}) => small ? '46%' : '22%'};
  display: flex;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  background: #FFFFFF;
  color: #000000;
  ${({small}) => {
    if (!small) {
      return `
       &:hover {
        background: #1E8161;
        color: #FFFFFF;
      }`;
    }
  }}
`;

const Paragraph = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
`;


const Item = (
    {
      small,
      label,
      history,
      lat,
      lng,
    },
) => {
  const handlerLink = () => {
    history.push(`/posters/flat/${lat}/${lng}`);
  };
  return (
    <Container
      small={small}
      onClick={() => handlerLink()}
    >
      <Paragraph>
        {label}
      </Paragraph>
    </Container>
  );
};

export default Item;
