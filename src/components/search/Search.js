import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Scrollbars} from 'react-custom-scrollbars-2';
import PropTypes from 'prop-types';
import Option from './option/Option';
import {Icon} from '../../svg/components';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
  width: ${({width}) => width};
  padding: 1px;
  position: relative;
  box-sizing: border-box;
`;


const SubContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0px 8px 0px 8px;
  width: 100%;
  cursor:pointer;
  flex-direction: column;
  background: #F9F9FB;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  &:hover { outline: 1px solid #63637E };
  @media (max-width: 1024px) {
      &:hover {
      ${({focus}) => (focus ?
  'outline: 1px solid #63637E' :
  'outline: 1px solid #F9F9FB')
};
}
  ${({focus}) => (focus ?
  'outline: 1px solid #63637E' :
  'outline: 1px solid #F9F9FB')
}
`;

const WrapperImage = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 7px;
  top: 8px;
`;

const Input = styled.input`
  width: 95%;
  border: none;
  background: #F9F9FB;
  height: ${({height}) => height};
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #9595B1;
  letter-spacing: 0.005em;
  outline: none;
  ::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #9595B1;
    letter-spacing: 0.005em;
  }
`;

const List = styled.div`
  width: 100%;
  max-height: ${({maxHeightList}) => maxHeightList}; 
  overflow: hidden; 
  display: flex;
  box-sizing: border-box;
  background: white;
  cursor:pointer;
  flex-direction: column;
  z-index: 4;
  position: absolute;
  top: ${({height}) => {
    const newHeight = height.replace(/[^0-9]/g, '');
    return `${Number(newHeight) + 10}${height.match(/\D/g).join('')}`;
  }};
  border: 1px solid #63637E;
  box-sizing: border-box;
  border-radius: 4px;
  left: 0;

`;

const ContentList = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 0px 0px 10px 0px;
`;


const Search = (
    {
      handlerClick,
      handlerChange,
      handlerOutside,
      value,
      arrayValue,
      width,
      height,
      maxHeightList,
      placeholder,
    },
) => {
  const [focus, setFocus] = useState(false);
  const useOutside = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handlerOutside();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutside(wrapperRef);
  const list = arrayValue.map((item, key) => (
    <Option
      key={key}
      value={item}
      height={height}
      handlerClick={handlerClick}
      titleValue={item.label}
    />
  ));
  const {t} = useTranslation();
  return (
    <Container width={width}>
      <SubContainer focus={focus} open={arrayValue.length > 0}>
        <Input
          height={height}
          onChange={(e) => handlerChange(e.target.value)}
          onFocus={(e) => {
            setFocus(true);
            handlerChange(e.target.value);
          }}
          onBlur={() => setFocus(false)}
          value={value}
          placeholder={t(placeholder)}
        />
        {arrayValue.length > 0 ? (
          <List
            ref={wrapperRef}
            maxHeightList={maxHeightList}
            height={height}
          >
            {arrayValue.length <= 5 ? (
              <ContentList>
                {list}
              </ContentList>
            ) : (
              <Scrollbars style={{height: maxHeightList}}>
                <ContentList>
                  {list}
                </ContentList>
              </Scrollbars>
            )}
          </List>
        ) : null}
      </SubContainer>
      <WrapperImage>
        <Icon name="search"/>
      </WrapperImage>
    </Container>
  );
};

export default Search;

Search.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
  handlerOutside: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  maxHeightList: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  arrayValue: PropTypes.arrayOf(PropTypes.any).isRequired,
};
