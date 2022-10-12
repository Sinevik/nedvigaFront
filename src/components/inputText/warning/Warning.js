import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';


const Circle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="8" fill="#BE2520"/>
  </svg>
);


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Paragraph = styled.p`
    margin: 0px;
    padding: 0px 0px 0px 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #BE2520;
`;

export const Warning = ({
  text,
  externalValid,
}) => {
  const {t} = useTranslation();
  return (
    <Container>
      {text || externalValid ? (
        <React.Fragment>
          <Circle/>
          <Paragraph>
            {t(externalValid || text)}
          </Paragraph>
        </React.Fragment>
      ) : null}
    </Container>
  );
};


Warning.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  externalValid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

Warning.defaultProps = {
  text: undefined,
  externalValid: undefined,
};
