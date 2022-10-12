import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Hook} from './Hook';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
    padding: 0px 4px 0px 0px;
`;

const Wrapper = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-radius: 4px;
    border: ${({focus, hover}) => {
    let result = '1px solid #EFEFF5';
    if (focus || hover) {
      result = '1px solid  #9595B1';
    }
    return result;
  }};
`;

const Input = styled.input`
    border: none;
    outline: none;
    font-size: 12px;
    width: 90%;
    height: 93%;
    font-size: ${({fontSize}) => fontSize};
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #000000;
    ::placeholder {
       color: #9595B1;
       opacity: 0.5;
   }
`;


export const InputItem = ({
  handlerText,
  handlerClick,
  /* -----*/
  receivedValueFromReducer,
  placeholder,
  maxLength,
  width,
  height,
  fontSize,
  reduxField,
  rule,
  number,
}) => {
  const {handlerInputText} = Hook({
    handlerText,
    reduxField,
    number,
    rule,
  });
  const {t} = useTranslation();
  const [hover, setHover] = useState(null);
  const [focus, setFocus] = useState(null);
  return (
    <Container>
      <Wrapper
        width={width}
        height={height}
        hover={hover}
        focus={focus}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Input
          className="input"
          fontSize={fontSize}
          type="number"
          onChange={(event) => handlerInputText(event)}
          onClick={() => handlerClick(reduxField)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={t(placeholder)}
          maxLength={maxLength}
          value={receivedValueFromReducer[reduxField].value ? receivedValueFromReducer[reduxField].value : ''}
        />
      </Wrapper>
    </Container>

  );
};


InputItem.propTypes = {
  handlerText: PropTypes.func.isRequired,
  handlerClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  reduxField: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  rule: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  receivedValueFromReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

InputItem.defaultProps = {
  valid: null,
};
