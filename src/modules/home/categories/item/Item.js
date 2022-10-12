import React from 'react';
import styled from 'styled-components';
import {useMedia} from 'react-media';
import {Icon} from '../../../../svg/categories';
import {useTranslation} from 'react-i18next';


const Paragraph = styled.div`
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.005em;
  color: #000000;
  @media (max-width: 1024px) {
    font-size: 11px;
  }
`;

const Container = styled.div`
  flex: 0 0 12.5%;
  max-width: 300px;
  background: #FFFFFF;
  @media (max-width: 700px) {
    flex: 0 0 28%;
  }
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${({small}) => {
    if (!small) {
      return `
      &:hover {
       background: #EFEFF5;
       border-radius: 8px;
    }
    &:hover ${Paragraph} {
      color: #000000;
    }
        `;
    }
  }}

`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px 0px 0px 0px;
`;

const TopContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BottomContent = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: #F9F9FB;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
`;

const WrapperImage = styled.div`
  width: 42px;
  height: 29px;
`;

const WrapperParagraph = styled.div`
  padding: 8px 0px 0px 0px;
  display: flex;
  flex-direction: column;
`;


const Item = (
    {
      value,
      handlerClick,
    },
) => {
  const {t} = useTranslation();
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  let newValue = t(value);
  let secondValue = null;
  if (value.includes(' ')) {
    const arr = value.split(' ');
    newValue = arr[0];
    secondValue = arr[1];
  }
  return (
    <Container
      small={small}
      onClick={() => handlerClick(value)}
    >
      <Content>
        <TopContent>
          <Wrapper>
            <WrapperImage>
              <Icon name={value}/>
            </WrapperImage>
          </Wrapper>
        </TopContent>
        <BottomContent>
          <WrapperParagraph>
            <Paragraph>
              {newValue}
            </Paragraph>
            {secondValue ? (
              <Paragraph>
                {secondValue}
              </Paragraph>
            ) : null}
          </WrapperParagraph>
        </BottomContent>
      </Content>
    </Container>
  );
};


export default Item;
