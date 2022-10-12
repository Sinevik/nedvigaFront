// eslint-disable-next-line
/* eslint prefer-template: "off" */
import React, {useMemo} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars-2';
import {chooseHook} from './hooks';
import Button from '../button/Button';
import {Actions} from '../../redux/Actions';

const Container = styled.div`
  background: #F5FAFF;
`;

const Content = styled.div`
  width: ${({width}) => width};
  height: ${({height}) => height};
  display: flex;
  flex-direction: row;
`;

const Selected = styled.div`
  width: ${({width}) => width};
  height: ${({height}) => height};
  background: #1C7F62;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #F9F9FB;
`;

const getBackgroundNumber = (reduxValue, index) => {
  let color = '#F5FAFF';
  if (reduxValue === index) {
    color = '#1C7F62;';
  }
  return color;
};

const getFontColor = (reduxValue, index) => {
  let color = '#63637E';
  if (reduxValue === index) {
    color = '#FFFFFF;';
  }
  return color;
};

const NumberLine = ({
  setValueField,
  handlerClick,
  /* -----*/
  width,
  height,
  fontSize,
  number,
  reducer,
  reduxField,
  widthCell,
  heightCell,
  hook,
  reduxFieldValue,
}) => {
  const callHook = chooseHook(hook);
  const {
    stateLine,
    handlerStateLine,
    wrapperRef,
    scrollRef,
  } = callHook({
    number,
    reduxFieldValue,
    handlerClick,
    setValueField,
  });
  const count = Math.ceil(number / 20);
  const r = /\d+/;
  const widthAllCell = parseInt(widthCell.match(r)[0], 10) * count + 'px';
  const widthScroll = widthAllCell;
  const widthContainer = parseInt(widthScroll.match(r)[0], 10) >
  parseInt(width.match(r)[0], 10) ?
    width : widthScroll;
  const content = useMemo(() => (
    [...Array(count)].map((item, index) => (
      <Button
        borderRadius="4px"
        value={index + 1}
        key={index}
        width={widthCell}
        height={heightCell}
        fontSize={fontSize}
        reducer={reducer}
        hook="redux"
        reduxField={reduxField}
        parentFunction={(e) => {
          window.scrollTo(0, 0);
          (e) => handlerStateLine(e);
        }}
        backgroundColor={getBackgroundNumber(reduxFieldValue,
            (index + 1))}
        fieldsCheckForDisabled={[true]}
        cursor={reduxFieldValue === index + 1 ? 'default' : 'pointer'}
        onFocusColor="#1C7F62"
        fontColor={getFontColor(reduxFieldValue,
            (index + 1))}
        onFocusFontColor="#FFFFFF"
      />
    ))
  ), [count, reduxFieldValue, stateLine]);
  return (
    <Container ref={wrapperRef}>
      {stateLine ? (
          <Scrollbars
            style={{
              width: widthContainer,
              height,
            }}
            ref={scrollRef}
            autoHide={false}
          >
            <Content
              width={widthScroll}
              height={height}
            >
              {content}
            </Content>
          </Scrollbars>
        ) :
        (
          <Selected
            width={widthCell}
            height={height}
            tabIndex={0}
            role="button"
            onClick={count > 1 ? (e) => handlerStateLine(e) : null}
            onKeyPress={count > 1 ? (e) => handlerStateLine(e) : null}
          >
            {String(reduxFieldValue)}
          </Selected>
        )
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(NumberLine);

NumberLine.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  number: PropTypes.number,
  fontSize: PropTypes.string.isRequired,
  widthCell: PropTypes.string.isRequired,
  heightCell: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  reducer: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.number.isRequired,
  setValueField: PropTypes.func.isRequired,
};

NumberLine.defaultProps = {
  number: null,
};
