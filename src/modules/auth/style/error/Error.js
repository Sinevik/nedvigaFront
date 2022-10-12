import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';


const WrapperError = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  visibility: ${({error}) => error ? 'visibly' : 'none'};
`;


const Paragraph = styled.p`
  margin: 0px;
  padding: 0px 10px 0px 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: red;
  cursor: pointer;
`;

const Error = ({errors}) => {
  const {t} = useTranslation();
  return (
    <WrapperError error={errors}>
      <Paragraph>
        {t(errors)}
      </Paragraph>
    </WrapperError>
  );
};

export default Error;
