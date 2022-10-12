import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars-2';
import styled from 'styled-components';
import {chooseHook} from './hooks';
import {Actions} from '../../redux/Actions';
import Option from './option/Option';
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


const DropDownCustomCheckbox = ({
  setValueField,

  /* -----*/
  reducer,
  placeholder,
  reduxFieldValue,
  reduxField,
  hook,
  width,
  height,
  heightScroll,
  arrayValue,
}) => {
  const {t} = useTranslation();
  const callHook = chooseHook(hook);
  const {
    handlerClick,
    trigger,
    reset,
  } = callHook({
    setValueField,
    reduxFieldValue:
      reduxFieldValue ? reduxFieldValue.concat() : reduxFieldValue,
    reduxField,
  });
  const getValueDropDown = (field, nameDropDown) => {
    let result = t(nameDropDown);
    if (field && field.length > 1) {
      result = `${t(field[0])}....`;
    }
    if (field && field.length === 1) {
      result = `${t(field[0])}`;
    }
    return result;
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
      reducer={reducer}
      value={item}
      height={height}
      reduxFieldValue={reduxFieldValue}
      reduxField={reduxField}
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
          <WrapperImage
            onClick={reduxFieldValue ? reset : null}
          >
            <Icon name={reduxFieldValue ? 'close' : 'open'}/>
          </WrapperImage>
        </Content>
      </SubContainer>
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
    mapDispatchToProps)(DropDownCustomCheckbox);


DropDownCustomCheckbox.propTypes = {
  hook: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  heightScroll: PropTypes.string.isRequired,
  setValueField: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  reducer: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.arrayOf(PropTypes.any),
  arrayValue: PropTypes.arrayOf(PropTypes.any),
};

DropDownCustomCheckbox.defaultProps = {
  arrayValue: undefined,
  reduxFieldValue: null,
};
