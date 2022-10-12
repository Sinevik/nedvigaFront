import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Checkbox from '../../checkbox/Checkbox';
import {useTranslation} from 'react-i18next';

const Title = styled.p`
  padding: 0px 0px 0px 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #000000;
`;

const Container = styled.div`
  width: 100%;
  height: ${({height}) => height};
  display: flex;
  padding: 0px 0px 0px 8px;
  background: #FFFFFF;
  &:hover {
    background: #ebebf1;
  }
  &:hover ${Title} {
    color: #3B8AE5;
  }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;


const Option = (
    {
      value,
      height,
      reduxField,
      reducer,
    },
) => {
  const {t} = useTranslation();
  return (
    <Container
      height={height}
    >
      <Content>
        <Checkbox
          item={value}
          hook="redux"
          reduxField={reduxField}
          reducer={reducer}
        />
        <Title>
          {t(value)}
        </Title>
      </Content>
    </Container>
  );
};

export default Option;

Option.propTypes = {
  reducer: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
