import React from 'react';
import styled from 'styled-components';
import {useMedia} from 'react-media';
import logoWhite from '../../icon/logoWhite.png';
import logoTextWhite from '../../icon/logoTextWhite.svg';

const WrapperSvg = styled.img`
  width: 64px;
  height: 64px;
`;

const WrapperLogoText = styled.img`
  width: 120px;
  height: 70px;
  padding: 0px 0px 0px 6px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #1C7F62;
  margin-top: 20px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  padding: ${({padding}) => padding || '0px 0px 0px 0px'};
  width: 100%;
  height: 100%;
  flex-direction: column;
  @media (max-width: 800px) {
    height: 140px;
    padding: 10px;
  }
`;

const Chapter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const Link = styled.a`
  display: flex;
  cursor: pointer;
  padding: ${({padding}) => padding || '0px 0px 0px 0px'};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #FFFFFF;
`;

const Paragraph = styled.div`
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #FFFFFF;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pay = styled.div`
    width: 400px;
    height: 40px;
    border-radius: 4px;
    background:  url(https://res.cloudinary.com/working-by-estate/image/upload/v1661766061/workingByEstate/%D0%9C%D0%9F%D0%A1_20_cw0iqv.jpg) no-repeat;
    background-size: contain;
    @media (max-width: 800px) {
      width: 300px;
    }
`;

const WrapperPay = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    height: 100px;
  }
`;

const Footer = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  return (
    <Container>
      <Content>
        <Section padding="20px 0px 0px 20px">
          <Chapter>
            <WrapperSvg src={logoWhite}/>
            <WrapperLogoText src={logoTextWhite}/>
          </Chapter>
          <Chapter>
            <Link href={'https://nedviga.by/public'}>
              Пользовательское соглашение
            </Link>
            <Link href={'mailto:support@nedviga.by'} padding="0px 0px 0px 15px">
              support@nedviga.by
            </Link>
          </Chapter>
        </Section>
        <Section padding="20px 0px 0px 20px">
          <Chapter>
            <Wrapper>
              <Paragraph>
                Оказание услуг ИП Синевич Иван Владимирович,
              </Paragraph>
              <Paragraph>
                Режим работы: Пн-Пт 09:00-17:00
              </Paragraph>
            </Wrapper>
          </Chapter>
        </Section>
        <Section padding="20px 0px 0px 20px">
          <Chapter>
            <Paragraph>
              © 2022 Nedviga.by
            </Paragraph>
          </Chapter>
        </Section>
      </Content>
      <WrapperPay>
        <Pay />
      </WrapperPay>
    </Container>
  );
};

export default Footer;
