import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
  width: 100%;
  height: ${({height}) => height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 16px;
  background: #FFFFFF;
  &:hover {
    background: #ebebf1;
  }
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #000000;
  &:hover {
    color: #3B8AE5;
  }
`;


const Option = (
    {
      handlerClick,
      value,
      height,
    },
) => {
  const {t} = useTranslation();
  return (
    <Container
      height={height}
      onClick={(event) => handlerClick(value, event)}
      onKeyPress={() => handlerClick(value)}
    >
      <Title>
        {Number(value) > 10000 ? Number(t(value)).toLocaleString('ru') : t(value)}
      </Title>
    </Container>
  );
};

export default Option;

Option.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
