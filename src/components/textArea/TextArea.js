import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';


const Container = styled.div`
`;

const Area = styled.textarea`
    width: ${({width}) => width};
    height: ${({height}) => height};
    font-size: ${({fontSize}) => fontSize};
    padding-left: 10px;
    border: 1px solid #EFEFF5;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
`;


const TextArea = (
    {
      width,
      height,
      fontSize,
      maxLength,
      placeholder,
      hook,
      reduxField,
      setValueField,
      reduxFieldValue,
    },
) => {
  const callHook = chooseHook(hook);
  const {handlerInputText} = callHook({
    setValueField,
    reduxField,
  });
  return (
    <Container>
      <Area
        width={width}
        height={height}
        fontSize={fontSize}
        onChange={(event) => handlerInputText(event)}
        placeholder={placeholder}
        maxLength={maxLength}
        value={reduxFieldValue || ''}
      />
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  reduxFieldValue: state[ownProps.reducer][ownProps.reduxField],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);


TextArea.propTypes = {
  reduxField: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  setValueField: PropTypes.func.isRequired,
  fontSize: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  reduxFieldValue: PropTypes.string,
};

TextArea.defaultProps = {
  placeholder: null,
  reduxFieldValue: null,
};
