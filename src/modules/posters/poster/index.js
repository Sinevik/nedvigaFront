import React, {useState} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useMedia} from 'react-media';
import Hint from '../../../components/hint/Hint';
import {Icon} from '../../../svg/components';
import {useTranslation} from 'react-i18next';
import {urlProcessing} from '../../../common/image';


const getLabel = (value, count) => {
  let result = value;
  if (result?.length > count) {
    result = result.substr(0, count);
    result += '...';
  }

  return result;
};

const getFullAddress = ({fullAddress, city, small}) => {
  const full = fullAddress.split(`${city}`).join('');
  let newString;
  if (full[0] === ',' || full[0] === ' ') {
    newString = full.slice(1);
  }
  return getLabel(newString, small ? 10 : 40);
};

const getDescription = (value, cut) => {
  const count = cut || 24;
  let result = value;
  if (result && result.length > count) {
    result = result.substr(0, count);
    result += '...';
  }

  return result;
};

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
  background: #F9F9FB;
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
  width: ${({map}) => map ? 60 : 70}%;
  @media (max-width: 800px) {
      width: 48%;
  }
  height: 100%;
  padding: 0px 0px 0px 16px;
`;

const WrapperPrice = styled.div`
  width: ${({map}) => map ? 26 : 16}%;
  @media (max-width: 800px) {
      width: 37%;
  }
  height: 100%;
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

const SectionBookmarks = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${({align}) => align};
`;

const ParagraphCity = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #000000;
    text-align: start;
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

const Image = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background:  ${({url}) => url ? `url(${urlProcessing(url, 10)}) no-repeat` : 'white'};
    background-size: cover;
`;

const Price = styled.p`
    padding: 0px 4px 0px 0px;
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.015em;
    @media (max-width: 800px) {
      font-size: 14px;
    }
    color: ${({color}) => color};
`;

const Number = styled.p`
    padding: 0px;
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    @media (max-width: 800px) {
      font-size: 12px;
      font-weight: 500;
    }
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

const WrapperBookmarks = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
`;

const WrapperDate = styled.div`
  padding: 40px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #9595B1;
`;


const Body = (
    {
      handlerClick,
      disabledLink,
      img,
      price,
      area,
      handlerBookmark,
      postersBookmark,
      fullAddress,
      city,
      small,
      description,
      trim,
      date,
      poster,
      map,
    },
) => {
  const {t} = useTranslation();
  const [hover, setHover] = useState(false);
  const book = postersBookmark?.includes(poster._id);
  return (
    <Container onClick={handlerClick ? () => handlerClick(poster) : () => console.log('click')}>
      <Content>
        <WrapperImage>
          <Image url={img}/>
        </WrapperImage>
        <WrapperDescription map={map}>
          <DescriptionContent>
            <Section padding="0px 0px 0px 0px">
              <ParagraphCity>
                {getLabel(city, small ? 10 : 100)}
              </ParagraphCity>
            </Section>
            <Section padding="0px 0px 0px 0px">
              <ParagraphAddress>
                {getFullAddress({fullAddress, city, small})}
              </ParagraphAddress>
            </Section>
            {!small ? (
              <Section padding="20px 0px 0px 0px">
                <ParagraphAddress>
                  {getDescription(description, trim)}
                </ParagraphAddress>
              </Section>
            ) : null}
            {!disabledLink ? (
              <SectionBookmarks
                justify="flex-start"
                align={small ? 'flex-start' : 'flex-end'}
              >
                <WrapperBookmarks
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    handlerBookmark(poster?._id);
                  }}
                >
                  <Icon
                    name="bookmarks"
                    hover={book}
                  />
                  {hover && !small ? (
                    <Hint
                      value={t(book ? 'delete-to-bookmarks' : 'add-to-bookmarks')}
                      top="-50px"
                      left="-80px"
                    />
                  ) : null}
                </WrapperBookmarks>
              </SectionBookmarks>
            ) : null}
          </DescriptionContent>
        </WrapperDescription>
        <WrapperPrice map={map}>
          <Section justify={small ? 'flex-end' : null}>
            <Price color="#000000">
              {price.toLocaleString('ru')}
            </Price>
            <Price color="#1C7F62"> руб.</Price>
          </Section>
          <Section justify={small ? 'flex-end' : null}>
            <Number>
              {area}
              {' '}
              <Span>
                M
                <sup>2</sup>
              </Span>
            </Number>
          </Section>
          {!small ? (
            <WrapperDate>
              {moment(date).format('DD.MM.YYYY')}
            </WrapperDate>
          ) : null}
        </WrapperPrice>
      </Content>
    </Container>
  );
};


const Poster = (
    {
      trim,
      price,
      city,
      area,
      fullAddress,
      slider,
      description,
      img,
      id,
      date,
      type,
      handlerBookmark,
      postersBookmark,
      disabledLink,
      handlerClick,
      poster,
      map,
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
          poster={poster}
          trim={trim}
          price={price}
          area={area}
          fullAddress={fullAddress}
          slider={slider}
          description={description}
          img={img}
          date={date}
          small={small}
          map={map}
        />
      ) : (
        <Link
          to={handlerClick ? `/poster/${type}/${id}` : `#`}
          target={small ? '_blank' : '_self'}
          style={{textDecoration: 'none', width: '100%', height: '100%'}}
        >
          <Body
            trim={trim}
            price={price}
            area={area}
            poster={poster}
            city={city}
            handlerBookmark={handlerBookmark}
            postersBookmark={postersBookmark}
            fullAddress={fullAddress}
            slider={slider}
            description={description}
            img={img}
            date={date}
            map={map}
            small={small}
          />
        </Link>
      )}
    </React.Fragment>
  );
};

export default Poster;
