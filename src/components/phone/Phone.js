import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import {Icon} from '../../svg/categories';
import {Icon as IconDelete} from '../../svg/components';
import InputText from '../inputText/InputText';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const WrapperInput = styled.div`
    width: ${({width}) => width};
    display: flex;
    flex-direction: row;
    padding: 0px 0px 5px 0px;
`;


const WrapperAdd = styled.div`
    height: 30px;
    padding: 0px 0px 0px 5px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const WrapperImage = styled.div`
    width: 24px;
    height: 24px;
`;


const WrapperDelete = styled.div`
    width: 30px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: center;
    align-items: flex-end;
    height: ${({height}) => height};
`;


const AddParagraph = styled.p`
    margin: 0px;
    padding: 0px 0px 0px 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: ${({hoverAdd}) => hoverAdd ? '#1C7F62' : '#9595B1'};
`;

export const Phone = ({
  setValueField,
  /* --------- */
  width,
  height,
  fontSize,
  direction,
  reduxField,
  reducer,
  numberField,
  reduxFieldValue,
  hook,
}) => {
  const {t} = useTranslation();
  const [hover, setHover] = useState(false);
  const [hoverAdd, setHoverAdd] = useState(false);
  const callHook = chooseHook(hook);
  const {
    handlerClick,
    deletePhone,
  } = callHook({
    setValueField,
    reduxFieldValue,
    reduxField,
    numberField,
  });
  const content = useMemo(() => (
    reduxFieldValue.map((item, index) => (
      <WrapperInput width={width} key={index}>
        <InputText
          maxLength={13}
          width="100%"
          mask="+375(99)9999999"
          height={height}
          fontSize={fontSize}
          direction={direction}
          placeholder="enter"
          reduxField={reduxField}
          index={index}
          rule="phone"
          reducer={reducer}
          hook="subFormRedux"
        />
        {index !== 0 ? (
          <WrapperDelete height={height}>
            <WrapperImage
              onMouseOver={() => setHover(index)}
              onMouseLeave={() => setHover(false)}
              onClick={() => {
                setHover(false);
                deletePhone(index);
              }}
            >
              <IconDelete name="delete" hover={hover === index}/>
            </WrapperImage>
          </WrapperDelete>
        ) : null}

      </WrapperInput>
    ))
  ), [reduxFieldValue, hover]);
  return (
    <Container>
      {content}
      {reduxFieldValue.length < numberField ?
        (
          <WrapperAdd onMouseOver={() => setHoverAdd(true)} onMouseLeave={() => setHoverAdd(false)}
            onClick={handlerClick}>
            <WrapperImage>
              <Icon name="add" active={hoverAdd}/>
            </WrapperImage>
            <AddParagraph hoverAdd={hoverAdd}>
              {t('add')}
            </AddParagraph>
          </WrapperAdd>
        ) :
        null
      }
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => (
  {
    reduxFieldValue: state[ownProps.reducer][ownProps.reduxField],
  }
);

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);

Phone.propTypes = {
  setValueField: PropTypes.func.isRequired,
  reduxField: PropTypes.string.isRequired,
  reducer: PropTypes.string.isRequired,
  numberField: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.arrayOf(PropTypes.any).isRequired,
};
