import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon as IconDelete} from '../../../svg/components';


const Container = styled.div`
    width: 100%;
    height: 56px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #F9F9FB;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
`;

const Paragraph = styled.p`
    width: 70%;
    margin: 0px;
    padding: 0px 0px 0px 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.005em;
    color: #9595B1;
`;

const WrapperDelete = styled.div`
    width: 40px;
    height: ${({height}) => height};
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`;


const WrapperImage = styled.div`
    width: 24px;
    height: 24px;
    box-sizing: content-box;
    padding: ${({padding}) => padding || '0px 0px 0px 0px'};
`;


const Item = ({
  address,
  handlerDelete,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Container>
      <Paragraph>
        {address.fullAddress ?
          address.fullAddress : `${address.lat}-${address.lng}`}
      </Paragraph>
      <WrapperDelete
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        height="100%"
      >
        <WrapperImage onClick={() => {
          setHover(false);
          handlerDelete();
        }}
        >
          <IconDelete
            hover={hover}
            name="delete"
          />
        </WrapperImage>
      </WrapperDelete>
    </Container>
  );
};

export default Item;
