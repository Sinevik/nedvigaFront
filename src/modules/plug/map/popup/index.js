import React from 'react';
import styled from 'styled-components';
import Modal from '../../../../components/modal/Modal';
import Triangle from './triangle/Triangle';
import Item from './item/Item';
import {cities} from '../../../../components/addСoord/cities/Cities';


const Wrapper = styled.div`
  position: absolute;
  top: ${({top}) => top};
  left: ${({left}) => left};
`;


const Container = styled.div`
  display: flex;
  width: ${({width}) => width};
  padding: 16px;
  border-radius: 16px;
  background: #FFFFFF;
  position: relative;
`;


const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


const PopUp = (
    {
      small,
      history,
      handlerClose,
      top,
      left,
      triangle,
      arrayValues,
    },
) => {
  const content = arrayValues.map((item, index) => {
    const city = cities.find((area) => area.label === item);
    return (
      <Item
        history={history}
        small={small}
        key={index}
        label={city?.label || 'nothing'}
        lat={city?.lat}
        lng={city?.lng}
      />
    );
  });
  return (
    <React.Fragment>
      {small ? (
        <Modal notfixed show={true} handlerClose={handlerClose}>
          <Container width="250px">
            <Content>
              {content}
            </Content>
          </Container>
        </Modal>
      ) : (
        <Wrapper top={top} left={left}>
          <Container width="500px">
            <Content>
              {content}
            </Content>
            <Triangle left={triangle}/>
          </Container>
        </Wrapper>
      )}
    </React.Fragment>
  );
};

export default PopUp;
