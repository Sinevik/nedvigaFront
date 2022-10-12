import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     padding: ${({mobile}) => (mobile ? '0px 0px 0px 0px' : '20px 0px 20px 0px')};
`;


const Wrapper = styled.div`
    width: 91%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
`;

const ParagraphItem = styled.p`
    outline: none;
    margin: 0px;
    padding: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #000000;
`;

const WrapperItem = styled.div`
    width: ${({width}) => width};
    display: flex;
    flex-direction: row;
    align-items: center;
    outline: none;
    justify-content: ${({justifyContent}) => justifyContent};
    ${({mobile}) => {
    if (!mobile) {
      return `
          &:hover {
            background: #F5FAFF;
            cursor: pointer;
        }
        `;
    }
  }}
`;

const WrapperHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${({justifyContent}) => justifyContent};
    font-size: ${({fontSize}) => fontSize};
`;

const ParagraphHeader = styled.p`
    margin: 0px;
    padding: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
`;


const DropDown = ({
  handlerClick,
  /* -----*/
  mobile,
  subcategories,
  nameCategory,
}) => {
  const {t} = useTranslation();
  const content = subcategories.map((item, index) => (
    <WrapperItem
      width={mobile ? '100%' : '25%'}
      mobile={mobile}
      justifyContent={mobile ? 'center' : 'start'}
      role="button"
      key={index}
      onClick={() => handlerClick(item)}
      onKeyPress={() => handlerClick(item)}
      tabIndex={0}
    >
      <ParagraphItem>
        {t(item)}
      </ParagraphItem>
    </WrapperItem>
  ));
  return (
    <Container mobile={mobile}>
      <Wrapper>
        {!mobile ? (
          <WrapperHeader
            justifyContent={mobile ? 'center' : 'start'}
          >
            <ParagraphHeader>
              {t(nameCategory)}
            </ParagraphHeader>
          </WrapperHeader>
        ) : null}
        <Content>
          {content}
        </Content>
      </Wrapper>
    </Container>
  );
};

DropDown.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  mobile: PropTypes.bool.isRequired,
  subcategories: PropTypes.arrayOf(PropTypes.any).isRequired,
  nameCategory: PropTypes.string.isRequired,
};

export default DropDown;
