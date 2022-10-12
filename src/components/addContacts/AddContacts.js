import React, {useEffect, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import InputText from '../inputText/InputText';
import {Icon} from '../../svg/categories';
import {Icon as IconDelete} from '../../svg/components';
import {Icon as IconLink} from '../../svg/link';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const WrapperSection = styled.div`
    width: auto;
`;

const WrapperContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const WrapperMethod = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({width}) => width};
    padding: 0px 8px 0px 0px;
`;

const WrapperInput = styled.div`
    position: relative;
`;

const WrapperLink = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({width}) => width};
    width: 40%;
`;

const WrapperListMethod = styled.div`
    width: ${({width}) => width};
    top: ${({top}) => top};
    position: absolute;
    z-index: 1;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
`;

const Method = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
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

const Paragraph = styled.div`
    margin: 0px;
    padding: 10px 0px 4px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

const WrapperDelete = styled.div`
    width: 30px;
    height: ${({height}) => height};
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: flex-end;
    align-items: flex-end;
`;


const WrapperImage = styled.div`
    width: 24px;
    height: 24px;
    box-sizing: content-box;
    padding: ${({padding}) => padding || '0px 0px 0px 0px'};
`;

const MethodP = styled.p`
    margin: 0px; 
    padding: 0px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.005em;
    color: #000000;
`;


const ContentMethod = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
`;

export const AddContacts = ({
  setValueField,
  /* --------- */
  width,
  height,
  fontSize,
  reduxField,
  numberField,
  reduxFieldValue,
  hook,
}) => {
  const {t} = useTranslation();
  const [hover, setHover] = useState(false);
  const [hoverAdd, setHoverAdd] = useState(false);
  const callHook = chooseHook(hook);
  const {
    focus,
    setFocus,
    handlerClick,
    chooseMethod,
    handlerInputText,
    deleteMethod,
    focusOnInput,
  } = callHook({
    setValueField,
    reduxFieldValue,
    reduxField,
    numberField,
  });
  const listMethod = [
    {
      header: 'vk',
      image: 'https://webim.ru/wp-content/uploads/2017/05/Vk.png',
    },
    {
      header: 'telegram',
      image: 'https://webim.ru/wp-content/uploads/2017/05/Vk.png',
    },
    {
      header: 'viber',
      image: 'https://webim.ru/wp-content/uploads/2017/05/Vk.png',
    },
    {
      header: 'facebook',
      image: 'https://webim.ru/wp-content/uploads/2017/05/Vk.png',
    },
  ];

  const useOutside = (ref) => {
    useEffect(() => {
      const handlerClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setTimeout(() => {
            setFocus(null);
          }, 100);
        }
      };
      document.addEventListener('mousedown', handlerClickOutside);
      return () => {
        document.removeEventListener('mousedown', handlerClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutside(wrapperRef);


  const listMethodContent = useMemo(() => (
    listMethod.map((item, index) => (
      <Method
        role="button"
        key={index}
        type="button"
        onClick={() => chooseMethod(item.header)}
        onKeyPress={() => chooseMethod(item.header)}
        tabIndex={0}
      >
        <ContentMethod>
          <WrapperImage padding="0px 20px 0px 0px">
            <IconLink name={item.header}/>
          </WrapperImage>
          <MethodP>
            {item.header}
          </MethodP>
        </ContentMethod>
      </Method>
    ))
  ), [listMethod]);


  const content = useMemo(() => (
    reduxFieldValue.map((item, index) => (
      <WrapperSection
        key={index}
      >
        <WrapperContent>
          <WrapperMethod width={width}>
            <Paragraph>
              {t('set-the-communication-method')}
            </Paragraph>
            <WrapperInput>
              <InputText
                maxLength={30}
                width="100%"
                height={height}
                fontSize={fontSize}
                direction="row"
                onFocus={() => focusOnInput(index)}
                placeholder="named"
                parentFunction={(event) => {
                  handlerInputText(event, index, 0);
                }}
                parentValueInput={reduxFieldValue[index][0]}
                hook="parent"
              />
              {focus === index && !reduxFieldValue[index][0].value ? (
                <WrapperListMethod
                  ref={wrapperRef}
                  width={`${parseInt(width, 10) - 8}px`}
                  top={height}
                >
                  {listMethodContent}
                </WrapperListMethod>
              ) : null}
            </WrapperInput>
          </WrapperMethod>
          <WrapperLink width={width}>
            <Paragraph>
              link
            </Paragraph>
            <InputText
              maxLength={30}
              width="100%"
              height={height}
              fontSize={fontSize}
              direction="row"
              placeholder="text"
              parentFunction={(event) => {
                handlerInputText(event, index, 1);
              }}
              parentValueInput={reduxFieldValue[index][1]}
              hook="parent"
            />
          </WrapperLink>
          <WrapperDelete
            onMouseOver={() => setHover(index)}
            onMouseLeave={() => setHover(false)}
            height={`${parseInt(height, 10) + 20}px`}
          >
            <WrapperImage onClick={() => {
              setHover(false);
              deleteMethod(index);
            }}
            >
              <IconDelete
                hover={hover === index}
                name="delete"
              />
            </WrapperImage>
          </WrapperDelete>
        </WrapperContent>
      </WrapperSection>
    ))
  ), [reduxFieldValue, focus, hover]);


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

const mapStateToProps = (state, ownProps) => ({
  reduxFieldValue: state[ownProps.reducer][ownProps.reduxField],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContacts);

AddContacts.propTypes = {
  setValueField: PropTypes.func.isRequired,
  reduxField: PropTypes.string.isRequired,
  numberField: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.arrayOf(PropTypes.any).isRequired,
};
