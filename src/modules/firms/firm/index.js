import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useMedia} from 'react-media';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 12px;
  user-select: none;
  @media (max-width: 800px) {
      padding: 8px;
  }
  cursor: pointer;
  background: #F5FAFF;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const WrapperImage = styled.div`
  width: 13%;
  @media (max-width: 800px) {
      width: 20%;
  }
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WrapperDescription = styled.div`
  width: 70%;
  @media (max-width: 800px) {
      width: 48%;
  }
  height: 100%;
  padding: 0px 0px 0px 16px;
`;

const DescriptionContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Section = styled.div`
  width: 80%;
  padding: ${({padding}) => padding};
  display: flex;
  flex-direction: row;
  justify-content: ${({justify}) => justify || null};
`;

const ParagraphAddress = styled.p`
    padding: 0px;
    text-align: start;
    word-break: break-all;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    word-wrap: break-word;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

const ParagraphLegalName = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #000000;
    text-align: start;
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background:  ${({img}) => img ? `url(${img}) no-repeat` : 'white'};
    background-size: cover;
`;

const getLabel = (value, count) => {
  let result = value;
  if (result?.length > count) {
    result = result.substr(0, count);
    result += '...';
  }

  return result;
};


const Body = (
    {
      handlerClick,
      img,
      small,
      legalName,
      fullAddress,
      firm,
    },
) => {
  return (
    <Container onClick={handlerClick ? () => handlerClick(firm) : () => console.log('click')}>
      <Content>
        <WrapperImage>
          <Image img={img}/>
        </WrapperImage>
        <WrapperDescription>
          <DescriptionContent>
            <Section padding="0px 0px 0px 0px">
              <ParagraphLegalName>
                {getLabel(legalName, small ? 10 : 100)}
              </ParagraphLegalName>
            </Section>
            <Section padding="0px 0px 0px 0px">
              <ParagraphAddress>
                {getLabel(fullAddress, small ? 30 : 100)}
              </ParagraphAddress>
            </Section>
          </DescriptionContent>
        </WrapperDescription>
      </Content>
    </Container>
  );
};


const Firm = (
    {
      legalName,
      fullAddress,
      img,
      id,
      disabledLink,
      handlerClick,
      firm,
    },
) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 800px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  return (
    <React.Fragment>
      {disabledLink ? (
        <Body
          disabledLink
          handlerClick={handlerClick}
          firm={firm}
          fullAddress={fullAddress}
          legalName={legalName}
          img={img}
          small={small}
        />
      ) : (
        <Link
          to={handlerClick ? `/firm/${id}` : '#'}
          style={{textDecoration: 'none', width: '100%', height: '100%'}}
        >
          <Body
            firm={firm}
            fullAddress={fullAddress}
            legalName={legalName}
            img={img}
            small={small}
          />
        </Link>
      )}
    </React.Fragment>
  );
};

export default Firm;
