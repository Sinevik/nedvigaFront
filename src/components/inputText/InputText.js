/* eslint-disable arrow-body-style */
// eslint-disable-next-line arrow-body-style
import React, {useEffect, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Warning} from './warning/Warning';
import Approved from './approved/Approved';
import ShowPassword from './showpassword/ShowPassword';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  cursor: text;
  background: #F9F9FB;
  border: ${({focus, hover}) => {
    let result = '1px solid #EFEFF5';
    if (focus || hover) {
      result = '1px solid  #9595B1';
    }
    return result;
  }};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0px 4px 0px 0px;
  width: ${({width}) => width};
  height: ${({height}) => height};
  display: flex;
  flex-direction: row;
`;

const WrapperApproved = styled.div`
  width: 30px;
  height: 100%;
`;

const WrapperInput = styled.div`
  flex: 1;
  height: 100%;
`;


const WrapperPassword = styled.div`
  width: 20px;
  height: 100%;
`;

const WrapperWarning = styled.div`
  width: 100%;
  min-height: 16px;
  padding: 5px 0px 0px 0px;
  box-sizing: content-box;
`;

const Input = styled.input`
  background: #F9F9FB;
  border: none;
  outline: none;
  width: 100%;
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

const InputText = ({
  setValueField,
  parentFunction,
  onFocus,
  /* ------ */
  parentValueInput,
  hook,
  mask,
  maxLength,
  width,
  height,
  fontSize,
  type,
  placeholder,
  externalValid,
  reduxField,
  reduxFieldValue,
  rule,
  disabled,
  index,
}) => {
  const {t} = useTranslation();
  const [validInput, setValidInput] = useState({});
  const [delay, setDelay] = useState(0);
  const [validExternal, setValidExternal] = useState(false);
  const [inputMaskRef, setInputRefMask] = useState(null);
  const [hover, setHover] = useState(null);
  const [focus, setFocus] = useState(null);
  const didMountRef = useRef(false);
  const inputRef = useRef(false);

  const [showPassword, setShowPassword] = useState(false);
  const callHook = chooseHook(hook);
  const {handlerInputText} = callHook(
      {
        setValueField,
        reduxFieldValue,
        reduxField,
        parentFunction,
        rule,
        index,
      },
  );
  let valueInput;

  if (parentValueInput && !reduxFieldValue) {
    valueInput = parentValueInput;
  } else {
    valueInput = index !== undefined ?
      reduxFieldValue[index] :
      reduxFieldValue;
  }

  if (!parentValueInput) {
    useMemo(() => {
      if (didMountRef.current) {
        window.clearTimeout(delay);
        const delayTime = window.setTimeout(() => {
          setValidInput({
            valid: valueInput.valid,
            warning: valueInput.warning,
          });
          setValidExternal(externalValid);
        }, valueInput.valid ? 300 : 2000);
        setDelay(delayTime);
      } else {
        setValidInput({
          valid: valueInput.valid,
          warning: valueInput.warning,
        });
        setValidExternal(externalValid);
        didMountRef.current = true;
      }
    }, [valueInput, externalValid]);
  }

  useEffect(() => {
    return () => window.clearTimeout(delay);
  }, []);

  return (
    <Container>
      <Wrapper
        onClick={() => {
          if (mask) {
            inputMaskRef.focus();
          } else {
            inputRef.current.focus();
          }
        }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        width={width}
        height={height}
        focus={focus}
        hover={hover}
      >
        <WrapperApproved>
          {!parentValueInput && validInput.valid && !externalValid ? (
            <Approved/>
          ) : null}
        </WrapperApproved>
        <WrapperInput>
          {mask ? (
            <InputMask
              style={{
                border: 'none',
                background: '#F9F9FB',
                outline: 'none',
                width: '100%',
                height: '93%',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '20px',
                letterSpacing: '0.01em',
                color: '#000000',
                fontSize,
              }}
              inputRef={(el) => setInputRefMask(el)}
              mask={mask}
              type={showPassword ? 'text' : type}
              onChange={(event) => handlerInputText(event)}
              value={valueInput.value ? valueInput.value : ''}
            />
          ) : (
            <Input
              ref={inputRef}
              fontSize={fontSize}
              focusable
              onFocus={() => {
                if (onFocus) {
                  onFocus();
                }
                setFocus(true);
              }}
              onBlur={() => setFocus(false)}
              tabIndex={0}
              disabled={disabled}
              type={showPassword ? 'text' : type}
              onChange={(event) => handlerInputText(event)}
              placeholder={t(placeholder)}
              maxLength={`${maxLength}`}
              value={valueInput.value ? valueInput.value : ''}
            />
          )}
        </WrapperInput>
        <WrapperPassword>
          {type === 'password' ? (
            <ShowPassword
              showPassword={showPassword}
              handlerClick={() => setShowPassword(!showPassword)}
            />
          ) : null}
        </WrapperPassword>
      </Wrapper>
      <WrapperWarning>
        {!parentValueInput ? (
          <Warning
            text={validInput.warning}
            externalValid={validExternal}
          />
        ) : null}
      </WrapperWarning>
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

export default connect(mapStateToProps, mapDispatchToProps)(InputText);


InputText.propTypes = {
  fontSize: PropTypes.string.isRequired,
  parentFunction: PropTypes.func,
  parentValueInput: PropTypes.objectOf(PropTypes.any),
  maxLength: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mask: PropTypes.string,
  reduxFieldValue: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]),
  placeholder: PropTypes.string,
  externalValid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  onFocus: PropTypes.func,
  setValueField: PropTypes.func,
  reduxField: PropTypes.string,
  rule: PropTypes.string,
  hook: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  index: PropTypes.number,
};

InputText.defaultProps = {
  reduxField: undefined,
  setValueField: undefined,
  parentValueInput: undefined,
  mask: undefined,
  onFocus: undefined,
  placeholder: null,
  reduxFieldValue: null,
  disabled: undefined,
  externalValid: undefined,
  index: undefined,
  type: undefined,
  parentFunction: undefined,
  rule: undefined,
};
