import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  margin: 0px;
  padding: 0px 0px 0px 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #9595B1;
`;

const Link = styled.a`
  padding: 0px 0px 10px 0px;
  margin: 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #3B8AE5;
`;

const Paragraph = styled.p`
  padding: 0px 0px 10px 0px;
  margin: 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #3B8AE5;
`;

const getLink = (link) => {
  let result = link;

  if (!link.includes('https://') && !link.includes('http://')) {
    result = `https://${link}`;
  }
  return result;
};


const getContent = ({type, value}) => {
  let result;
  switch (type) {
    case 'phone':
      result = (
        <Link href={`tel:${value}`}>
          {value}
        </Link>
      );
      break;
    case 'link':
      result = (
        <Link href={`${getLink(value)}`}>
          {value}
        </Link>
      );
      break;
    case 'mail':
      result = (
        <Link href={`mailto:${value}`}>
          {value}
        </Link>
      );
      break;
    case 'text':
      result = (
        <Paragraph href={`${value}`}>
          {value}
        </Paragraph>
      );
      break;
    case 'default':
      result = (
        <Paragraph>
          {value}
        </Paragraph>
      );
  }
  return result;
};


const Item = (
    {
      title,
      type,
      value,
    },
) => {
  return (
    <React.Fragment>
      {value ? (
        <Container>
          {title ? (
            <Title>
              {title}
            </Title>
          ) : null}
          {getContent({type, value})}
        </Container>
      ) : null}
    </React.Fragment>
  );
};

export default Item;
