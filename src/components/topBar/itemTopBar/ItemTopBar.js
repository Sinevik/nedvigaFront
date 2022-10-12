import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Circle from './circle/Circle';
import Line from './line/Line';
import Hook from './Hook';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    flex: 0 0 ${({width}) => width};
    height: ${({height}) => height};
    cursor: ${({itemState}) => (itemState ? 'pointer' : 'default')};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;


const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    height: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const Paragraph = styled.div`
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.01em;
    color: ${({color}) => color};
`;


const getColoring = (
    {
      itemState,
      error,
    },
) => {
  let coloring = {};

  if (!itemState) {
    coloring = {
      hollow: true,
      color: '#DDDDE9',
      approve: false,
    };
  } else if (itemState && error === 'black') {
    coloring = {
      hollow: true,
      color: '#1C7F62',
      approve: false,
    };
  } else if (itemState && error === 'green') {
    coloring = {
      hollow: false,
      color: '#1C7F62',
      approve: true,
    };
  } else if (itemState && error === 'red') {
    coloring = {
      hollow: false,
      color: '#BE2520',
      approve: false,
    };
  }

  return coloring;
};


const ItemTopBar = ({
  handlerClick,
  /* -----*/
  edit,
  width,
  height,
  name,
  number,
  page,
  disabledLine,
  reduxFields,
  tabIndex,
}) => {
  const {
    itemState,
    error,
    small,
  } = Hook({
    edit,
    number,
    page,
    reduxFields,
  });
  const coloring = getColoring({
    itemState,
    error,
  });
  const {t} = useTranslation();
  return (
    <Container
      type="button"
      role="button"
      itemState={itemState}
      width={!small ? width : '150px'}
      height={height}
      tabIndex={tabIndex}
      onClick={itemState ? () => handlerClick(number) : () => console.log()}
      onKeyPress={itemState ? () => handlerClick(number) : () => console.log()}
      backgroundColor={itemState ? 'white' : 'grey'}
      borderColor={error}
    >
      <Content>
        <Wrapper>
          <Circle
            number={number + 1}
            color={coloring?.color}
            hollow={coloring?.hollow}
            approve={coloring?.approve}
          />
          <Paragraph color={coloring?.color}>
            {t(name)}
          </Paragraph>
        </Wrapper>
        {!disabledLine && !small ? (
          <Line
            color={coloring?.color}
          />
        ) : null}
      </Content>
    </Container>
  );
};

ItemTopBar.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  disabledLine: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  tabIndex: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  reduxFields: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ItemTopBar;
