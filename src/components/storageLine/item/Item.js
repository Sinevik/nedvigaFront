import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Icon} from '../../../svg/components';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    width: 20%;
    height: ${({height}) => height};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const WrapperValue = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const Paragraph = styled.div`
    margin: 0px;
    padding: 0px 0px 0px 4px;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    user-select: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.005em;
    color: #9595B1;
`;

const Delete = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WrapperImage = styled.div`
    width: 24px;
    height: 24px;
    box-sizing: content-box;
    padding: 0px;
`;


export const Item = ({
  value,
  deleteItem,
  height,
}) => {
  const {t} = useTranslation();
  const [hoverClose, setHoverClose] = useState(false);
  return (
    <Container height={height}>
      <WrapperValue>
        <Paragraph>
          {t(value)}
        </Paragraph>
      </WrapperValue>
      <Delete
        onMouseOver={() => setHoverClose(true)}
        onMouseLeave={() => setHoverClose(false)}
        onClick={() => deleteItem(value)}
      >
        <WrapperImage>
          <Icon hover={hoverClose} name="close"/>
        </WrapperImage>
      </Delete>
    </Container>
  );
};


Item.propTypes = {
  value: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
