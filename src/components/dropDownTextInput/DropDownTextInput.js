import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Scrollbars} from 'react-custom-scrollbars-2';
import {chooseHook} from './hooks';
import {Actions} from '../../redux/Actions';
import Option from './option/Option';
import {Icon} from '../../svg/dropDown';
import './style.css';
import {useTranslation} from 'react-i18next';


const Label = styled.p`
   margin: 0;
   padding: 0px 6px 0px 6px;
   background: #ebebf1;
   z-index: 1;
   position: absolute;
   top: -10px;
   left: 10px;
   text-align: center;
   font-family: Roboto;
   font-style: normal;
   font-weight: 500;
   font-size: 11px;
   line-height: 16px;
   letter-spacing: 0.01em;
   color: #1C7F62;
`;

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
    ${({label}) => {
    if (label) {
      return 'border: 1px solid #1C7F62; &:hover { border: 1px solid #1C7F62 };';
    }
  }}
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

const WrapperUnit = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Sup = styled.sup``;

const Input = styled.input`
  width: 60%;
  height: 65%;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #63737A;
  outline: none;
  ::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #63737A;
`;

const Unit = styled.div`
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #63737A;
`;


const getIcon = ({reduxFieldValue, disabledDrop}) => {
  let result = null;

  if (reduxFieldValue) {
    result = 'close';
  } else if (reduxFieldValue && !disabledDrop) {
    result = 'open';
  }
  return result;
};


const DropDownTextInput = ({
  setValueField,
  onFocus,
  onFocusOut,
  /* ---- */
  label,
  disabledDrop,
  reduxFieldValue,
  reduxField,
  placeholder,
  unit,
  sup,
  width,
  height,
  hook,
  heightScroll,
  arrayValue,
}) => {
  const {t} = useTranslation();
  const callHook = chooseHook(hook);
  const {
    handlerChange,
    handlerChangeInput,
    handlerClick,
    reset,
    trigger,
    inputEl,
  } = callHook({
    setValueField,
    reduxField,
    reduxFieldValue,
  });
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
  const list = !disabledDrop && arrayValue.map((item, key) => (
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
      onClick={() => {
        inputEl.current.focus();
        handlerClick(true);
      }}
    >
      {reduxFieldValue ? (
        <Label>
          {t(label)}
        </Label>
      ) : null}
      <SubContainer
        open={trigger}
        label={reduxFieldValue}
      >
        <Content>
          <Input
            className="input"
            ref={inputEl}
            type="number"
            pattern="[0-9]*"
            inputmode="numeric"
            onChange={(e) => handlerChangeInput(e)}
            onBlur={(e) => {
              if (onFocusOut) {
                onFocusOut(e);
              }
            }}
            onFocus={(e) => {
              if (onFocus) {
                onFocus(e);
              }
            }}
            value={reduxFieldValue || ''}
            placeholder={t(placeholder)}
          />
          {unit ? (
            <WrapperUnit>
              <Unit>
                {unit}
                <Sup>{sup}</Sup>
              </Unit>
            </WrapperUnit>
          ) : null}
          <WrapperImage
            onClick={reduxFieldValue ? reset : null}
          >
            <Icon
              name={getIcon({reduxFieldValue, disabledDrop})}
            />
          </WrapperImage>
        </Content>
      </SubContainer>
      {trigger && !disabledDrop ? (
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
    mapDispatchToProps)(DropDownTextInput);


DropDownTextInput.propTypes = {
  setValueField: PropTypes.func.isRequired,
  disabledDrop: PropTypes.bool,
  label: PropTypes.string,
  unit: PropTypes.string,
  sup: PropTypes.number,
  index: PropTypes.number,
  heightScroll: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.string,
  arrayValue: PropTypes.arrayOf(PropTypes.any),
};

DropDownTextInput.defaultProps = {
  index: undefined,
  disabledDrop: undefined,
  heightScroll: undefined,
  arrayValue: undefined,
  unit: undefined,
  label: undefined,
  sup: undefined,
  reduxFieldValue: null,
};
