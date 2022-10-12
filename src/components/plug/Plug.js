import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {Actions} from '../../redux/Actions';


const Container = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    position: fixed;
    background: black;
    opacity: 0.5;
`;


const Plug = () => {
  const {
    setPlug,
  } = Actions('general')(useDispatch());
  return (
    <Container onClick={() => setPlug(false)}/>
  );
};

export default Plug;
