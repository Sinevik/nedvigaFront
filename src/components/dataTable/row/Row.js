import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {useMedia} from "react-media";


const Container = styled.div`
    width: 100%;
    min-height: ${({height}) => height};
    display: flex;
    flex-direction: row;
    justify-content: center;  
`;

const Item = styled.div`
    overflow: hidden;
    width: ${({small}) => small ? 50 : 33.33}%;
    display: flex;
    flex-direction: row;
    justify-content: ${({justify}) => justify || 'flex-start'};
    align-items: center;
`;

const Line = styled.div`
    width: 100%;
    border-radius: 4px;
    border-bottom: 2px solid #DDDDE9;
`;

const ParagraphD = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

const ParagraphV = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`;

const Span = styled.span`
    padding: ${({padding}) => padding || '0px 0px 0px 0px'};
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;


const getValue = (value) => {
  return value;
};

const Row = (
    {
      title,
      value,
      units,
      sup,
      height,
    },
) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 800px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const {t} = useTranslation();
  return (
    <Container height={height}>
      <Item small={small}>
        <ParagraphD>
          {t(title)}
        </ParagraphD>
      </Item>
      {!small ? (
        <Item small={small}>
          <Line/>
        </Item>
      ) : null}
      <Item small={small} justify="flex-end">
        <ParagraphV>
          {t(value) || ''}
        </ParagraphV>
        {units ? (
          <Span padding="0px 0px 0px 4px">
            {units}
            <sup>{sup}</sup>
          </Span>
        ) : null}
      </Item>
    </Container>
  );
};

export default Row;

Row.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  height: PropTypes.string.isRequired,
  units: PropTypes.string,
  sup: PropTypes.number,
};

Row.defaultProps = {
  units: undefined,
  sup: null,
};
