import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Scrollbars} from 'react-custom-scrollbars-2';
import {chooseHook} from './hooks';
import {Actions} from '../../redux/Actions';
import Option from '../dropDownTextInput/option/Option';
import {Icon} from '../../svg/dropDown';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
  display: flex;
  width: ${({width}) => width};
  height: ${({height}) => height};
  box-sizing: content-box;
  padding: 0px 0px 10px 0px;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px 12px 0px 12px;
  display: flex;
  cursor:pointer;
  flex-direction: row;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${({open}) => (open ? '1px solid #63637E' : '1px solid #EFEFF5')};
  &:hover { border: 1px solid #63637E };
`;


const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

const WrapperImage = styled.div`
  width: 10px;
  height: 15px;
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
  z-index:1;
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
`;

const Placeholder = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #63737A;
    overflow: hidden;
    white-space: nowrap;
`;


const DropDownCustom = ({
  setValueField,
  /* -----*/
  placeholder,
  reduxFieldValue,
  hook,
  width,
  height,
  heightScroll,
  reduxField,
  arrayValue,
}) => {
  const {t} = useTranslation();
  const callHook = chooseHook(hook);
  const {
    handlerChange,
    handlerClick,
    trigger,
  } = callHook({
    setValueField,
    reduxField,
  });

  const getValueDropDown = (field, nameDropDown) => {
    let result = nameDropDown;
    if (field) {
      result = field;
    }
    if (field && field.length > 15) {
      result = result.substr(0, 15);
      result += '...';
    }
    return t(result);
  };

  const useOutside = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handlerClick(false);
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
      handlerClick={handlerChange}
    />
  ));
  return (
    <Container
      width={width}
      height={height}
      onMouseLeave={() => handlerClick(false)}
    >
      <SubContainer
        open={trigger}
        onClick={() => handlerClick(true)}
      >
        <Content>
          <Placeholder>
            {getValueDropDown(reduxFieldValue, placeholder)}
          </Placeholder>
          <WrapperImage>
            <Icon name="open"/>
          </WrapperImage>
        </Content>
        {trigger ? (
          <List
            ref={wrapperRef}
            maxHeightList={heightScroll}
            height={height}
          >
            {arrayValue.length <= 4 ? (
              <ContentList>
                {list}
              </ContentList>
            ) : (
              <Scrollbars style={{height: heightScroll}}>
                <ContentList>
                  {list}
                </ContentList>
              </Scrollbars>
            )}
          </List>
        ) : null}
      </SubContainer>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  reduxFieldValue: ownProps.reducer ?
    state[ownProps.reducer][ownProps.reduxField] :
    null,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = ownProps.reducer ? Actions(ownProps.reducer) : {};
  return result;
};


export default connect(mapStateToProps,
    mapDispatchToProps)(DropDownCustom);


DropDownCustom.propTypes = {
  setValueField: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  reduxFieldValue: PropTypes.string,
  hook: PropTypes.string.isRequired,
  heightScroll: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  arrayValue: PropTypes.arrayOf(PropTypes.any),
};

DropDownCustom.defaultProps = {
  arrayValue: undefined,
  placeholder: undefined,
  reduxFieldValue: null,
};
