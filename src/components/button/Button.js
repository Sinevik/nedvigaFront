import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {chooseHook} from './hooks';
import {Actions} from '../../redux/Actions';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
    min-width: ${({width}) => width};
    min-height: ${({height}) => height};
    cursor: ${({cursor}) => cursor || 'default'};
    font-size: ${({fontSize}) => fontSize};
    border: ${({border}) => border || 'none'};
    margin: ${({margin}) => margin || 'none'};
    border-radius: ${({borderRadius}) => borderRadius || 'none'};
    background-color: ${({backgroundColor}) => backgroundColor || 'none'};
    box-shadow: ${({boxShadow}) => boxShadow || 'none'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    outline: none;
    userSelect: none;
    cursor: pointer;
    box-sizing: border-box;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: ${({fontColor}) => fontColor || 'none'};
    
`;

const getDisabledButton = (fieldsCheckForDisabled) => {
  let disabled = false;
  if (fieldsCheckForDisabled) {
    const validField = useMemo(() => fieldsCheckForDisabled.some(
        (field) => !field), [fieldsCheckForDisabled]);
    disabled = !!validField;
  }
  return disabled;
};

const getBackgroundButton = (fieldsCheckForDisabled,
    focus, backgroundColor, onFocusColor) => {
  let color = backgroundColor;
  if (getDisabledButton(fieldsCheckForDisabled)) {
    color = '#bdbebd';
  } else if (focus) {
    color = onFocusColor;
  }
  return color;
};

const Button = ({
  setIncrementPage,
  setValueField,
  parentFunction,
  /* --------*/
  fieldsCheckForDisabled,
  reduxField,
  onFocusColor,
  width,
  height,
  fontSize,
  backgroundColor,
  borderRadius,
  fontColor,
  onFocusFontColor,
  onFocusBorder,
  onFocusBoxShadow,
  border,
  cursor,
  margin,
  value,
  hook,
  boxShadow,
}) => {
  const callHook = chooseHook(hook);
  const {handlerClick} = callHook({
    parentFunction,
    setIncrementPage,
    setValueField,
    value,
    reduxField,
  });
  const [focus, setFocus] = useState(false);
  const {t} = useTranslation();

  return (
    <Container
      role="button"
      width={width}
      height={height}
      fontSize={fontSize}
      boxShadow={focus ? onFocusBoxShadow : boxShadow}
      borderRadius={borderRadius}
      fontColor={focus ? onFocusFontColor : fontColor}
      backgroundColor={getBackgroundButton(fieldsCheckForDisabled,
          focus, backgroundColor, onFocusColor)}
      cursor={cursor}
      border={focus ? onFocusBorder : border}
      margin={margin}
      type="button"
      onClick={!getDisabledButton(fieldsCheckForDisabled) ?
        (e) => handlerClick(e) : null}
      onKeyPress={!getDisabledButton(fieldsCheckForDisabled) ?
        (e) => handlerClick(e) : null}
      tabIndex={0}
      onMouseOver={onFocusColor ? () => setFocus(true) : null}
      onFocus={onFocusColor ? () => setFocus(true) : null}
      onMouseLeave={onFocusColor ? () => setFocus(false) : null}
    >
      {t(value)}
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


export default connect(mapStateToProps, mapDispatchToProps)(Button);

Button.propTypes = {
  setIncrementPage: PropTypes.func,
  hook: PropTypes.string.isRequired,
  onFocusColor: PropTypes.string,
  cursor: PropTypes.string,
  fieldsCheckForDisabled: PropTypes.arrayOf(PropTypes.any),
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  borderRadius: PropTypes.string,
  fontColor: PropTypes.string,
  onFocusFontColor: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  reduxField: PropTypes.string,
  parentFunction: PropTypes.func,
  setValueField: PropTypes.func,
  border: PropTypes.string,
  onFocusBorder: PropTypes.string,
  margin: PropTypes.string,
  boxShadow: PropTypes.string,
  onFocusBoxShadow: PropTypes.string,
};

Button.defaultProps = {
  onFocusBoxShadow: undefined,
  boxShadow: undefined,
  onFocusFontColor: undefined,
  borderRadius: undefined,
  fontColor: undefined,
  onFocusBorder: undefined,
  onFocusColor: undefined,
  cursor: undefined,
  setIncrementPage: undefined,
  setValueField: undefined,
  fieldsCheckForDisabled: undefined,
  reduxField: undefined,
  parentFunction: undefined,
  border: undefined,
  margin: undefined,
};
