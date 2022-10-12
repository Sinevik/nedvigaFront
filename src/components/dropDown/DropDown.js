import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import {useTranslation} from 'react-i18next';

const Select = styled.select`
    width: ${({width}) => width};
    height: ${({height}) => height};
    border: 1px solid #EFEFF5;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
`;

export const DropDown = ({
  setValueField,
  /* -----*/
  width,
  height,
  reduxField,
  reduxFieldValue,
  arrayValues,
  textOption,
  hook,
}) => {
  const {t} = useTranslation();
  const callHook = chooseHook(hook);
  const {handlerChange} = callHook({
    setValueField,
    reduxField,
  });
  const content = useMemo(() => (
    arrayValues.map((item) => (
      <option key={item} value={item}>
        {reduxFieldValue === item && textOption ? `${t(textOption)}  ` : null}
        {item}
      </option>
    ))
  ), [arrayValues, reduxFieldValue]);
  return (
    <Select
      width={width}
      height={height}
      value={reduxFieldValue}
      onChange={handlerChange}
    >
      {content}
    </Select>
  );
};

const mapStateToProps = (state, ownProps) => ({
  reduxFieldValue: state[ownProps.reducer][ownProps.reduxField],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};


export default connect(mapStateToProps, mapDispatchToProps)(DropDown);


DropDown.propTypes = {
  setValueField: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  textOption: PropTypes.string,
  reduxField: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.string,
  hook: PropTypes.string.isRequired,
  arrayValues: PropTypes.arrayOf(PropTypes.any),
};

DropDown.defaultProps = {
  arrayValues: undefined,
  textOption: undefined,
  reduxFieldValue: undefined,
};
