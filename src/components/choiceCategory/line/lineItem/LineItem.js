import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Icon} from '../../../../svg/company';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
  width: ${({width}) => width};
  display: flex;
  cursor: pointer;
  outline: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


const Content = styled.div`
  width: ${({mobile}) => (mobile ? '90%' : '70%')};
  display: flex;
  flex-direction: ${({mobile}) => (mobile ? 'row' : 'column')};
  align-items: center;
  padding: 0px;
  ${({mobile}) => {
    if (!mobile) {
      return `
          &:hover {
            box-sizing: border-box;
            background: #F5FAFF;
            outline: 1px solid #CCE1F9;
            border-radius: 8px;
        }
        &:hover ${Paragraph} {
            color: #000000;
          }
        `;
    }
  }}

`;

const WrapperImage = styled.div`
  width: 130px;
  height: 130px;
  ${({mobile}) => {
    if (mobile) {
      return `
          width: 100px;
          height: 100px;
        `;
    }
  }}
`;

const Paragraph = styled.p`
  margin: 0px;
  padding: ${({mobile}) => (mobile ? '0px 0px 0px 10px;' : '16px 0px 0px 0px;')};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #9595B1;
`;


const LineItem = ({
  chooseCategory,
  selectedCategory,
  /* -----*/
  mobile,
  name,

}) => {
  const {t} = useTranslation();
  return (
    <Container
      width={mobile ? '100%' : '25%'}
      mobile={mobile}
      type="button"
      role="button"
      onClick={() => chooseCategory(name === selectedCategory ? null : name)}
      onKeyPress={() => chooseCategory(name === selectedCategory ? null : name)}
      tabIndex={0}
    >
      <Content
        mobile={mobile}
      >
        <WrapperImage mobile={mobile}>
          <Icon name={name}/>
        </WrapperImage>
        <Paragraph mobile={mobile}>
          {t(name)}
        </Paragraph>
      </Content>
    </Container>
  );
};

LineItem.propTypes = {
  chooseCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
  name: PropTypes.string.isRequired,
  mobile: PropTypes.bool.isRequired,
};

LineItem.defaultProps = {
  selectedCategory: null,
};

export default LineItem;
