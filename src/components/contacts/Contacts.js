import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Icon} from '../../svg/components';
import Button from '../button/Button';
import {useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
    padding: 11px 16px 16px 11px;
    background: #FFFFFF;
    border-radius: 4px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Paragraph = styled.div`
    margin: 0px;
    padding: 10px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

const Phone = styled.div`
    cursor: pointer;
    margin: 0px;
    padding: 0px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1C7F62;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const WrapperClose = styled.div`
    width: 15px;
    height: 15px;
    cursor: pointer;
    padding: 0px;
`;

const ShowUser = styled.div`
    width: 100%;
    margin: 0px;
    padding: 10px 0px 0px 0px;
`;

const getLink = (link) => {
  let result = link;

  if (!link.includes('https://') && !link.includes('http://')) {
    result = `https://${link}`;
  }
  return result;
};

const getTypeSales = (value) => {
  let result = value;
  if (typeof value === 'string') {
    result = value[0].toLowerCase() + value.slice(1);
  }
  return result;
};


const Contacts = (
    {
      methods,
      phone,
      typeSales,
      handlerClose,
      name,
      owner,
      email,
      webSite,
    },
) => {
  const history = useHistory();
  const {t} = useTranslation();
  return (
    <Container>
      <Header>
        <WrapperClose onClick={() => handlerClose()}>
          <Icon name="close"/>
        </WrapperClose>
      </Header>
      <Content>
        <Paragraph>
          {t('phone')}
        </Paragraph>
        {phone.map((item, index) => (
          <Phone key={index}>
            <a style={{color: '#1C7F62'}} href={`tel:${item}`}>
              {item}
            </a>
          </Phone>
        ))}
        {methods.map((item, index) => (
          <React.Fragment key={index}>
            <Paragraph>
              {item.method}
            </Paragraph>
            <Phone key={index}>
              <a style={{color: '#1C7F62'}} href={`${getLink(item.path)}`} target='_blank' rel="noreferrer">
                {item.path}
              </a>
            </Phone>
          </React.Fragment>
        ))}
        {name ? (
          <React.Fragment>
            <Paragraph>
              {t('name')}
            </Paragraph>
            <Phone>
              {name}
            </Phone>
          </React.Fragment>
        ) : null}
        {email ? (
          <React.Fragment>
            <Paragraph>
              {t('email')}
            </Paragraph>
            <Phone>
              <a style={{color: '#1C7F62'}} href={`mailto:${email}`}>
                {email}
              </a>
            </Phone>
          </React.Fragment>
        ) : null}
        {webSite ? (
          <React.Fragment>
            <Paragraph>
              {t('web-site')}
            </Paragraph>
            <Phone>
              <a style={{color: '#1C7F62'}} href={`${getLink(webSite)}`} target='_blank' rel="noreferrer">
                {webSite}
              </a>
            </Phone>
          </React.Fragment>
        ) : null}
        {typeSales ? (
          <React.Fragment>
            <Paragraph>
              {t('type-sales')}
            </Paragraph>
            <Phone>
              {getTypeSales(t(typeSales))}
            </Phone>
          </React.Fragment>
        ) : null}
        <ShowUser>
          <Button
            borderRadius="4px"
            value={t('show-user')}
            width="100%"
            height="28px"
            fontSize="12px"
            hook="parent"
            parentFunction={() => history.push(`/infoUser/${owner}`)}
            backgroundColor="#1C7F62"
            cursor="pointer"
            onFocusColor="#43B949"
            fontColor="#F9F9FB"
            onFocusFontColor="#F9F9FB"
            boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
          />
        </ShowUser>
      </Content>
    </Container>
  );
};

export default Contacts;


Contacts.propTypes = {
  handlerClose: PropTypes.func.isRequired,
  phone: PropTypes.arrayOf(PropTypes.string).isRequired,
  methods: PropTypes.arrayOf(PropTypes.any).isRequired,
  owner: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  webSite: PropTypes.string,
};

Contacts.defaultProps = {
  name: undefined,
  email: undefined,
  webSite: undefined,
};
