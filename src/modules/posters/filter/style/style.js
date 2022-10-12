import styled from 'styled-components';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const Container = styled.div`
    width: ${({fullScreen}) => (fullScreen ? '80%' : '100%')};
    max-width: 1400px; 
    background: ${({fullScreen}) => (fullScreen ? '#ebebf1;' : 'white')};
    height: ${({height}) => height};
    transition: height 1s ease;
    display: flex;
    flex-direction: column;
    ${({fullScreen}) => {
    if (fullScreen) {
      return 'position: absolute; margin: auto; z-index: 1;';
    }
  }}
`;

export const Line = styled.div`
    width: ${({width}) => width};
    padding: 0px 0px 16px 0px;
    display: flex;
    flex-direction: row;
    justify-content: ${({justify}) => justify || 'space-between'};
`;

const SectionContainer = styled.div`
    width: ${({width}) => width};
    background: #ebebf1;
    border-radius: 4px;
    padding: 0px 4px 4px 4px;
`;

const SectionContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TopSection = styled.div`
    width: 100%;
`;

const BottomSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ;
    
`;

const Header = styled.p`
    padding: 8px 0px 8px 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
`;


export const Block = (
    {
      width,
      children,
      label,
    },
) => {
  const {t} = useTranslation();
  return (
    <SectionContainer width={width}>
      <SectionContent>
        <TopSection>
          <Header>
            {t(label)}
          </Header>
        </TopSection>
        <BottomSection>
          {children}
        </BottomSection>
      </SectionContent>
    </SectionContainer>
  );
};
