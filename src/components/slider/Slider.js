import React, {useState} from 'react';
import styled from 'styled-components';
import {LeftMin, RightMin} from '../../svg/slider';

const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
    display: flex;
    flex-direction: row;
`;

const Button = styled.div`
    width: 24px;
    @media (max-width: 700px) {
      width: 30px;
    }
    height: 100%;
    cursor: pointer;
    outline: none;
    z-index: 1;
    background: #F5FAFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;

const Prev = ({prevSlider}) => {
  const [hover, setHover] = useState(false);
  return (
    <Button
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="button"
      type="button"
      onClick={() => prevSlider()}
      onKeyPress={() => prevSlider()}
      tabIndex={0}
    >
      <LeftMin hover={hover}/>
    </Button>
  );
};
const Next = ({nextSlider}) => {
  const [hover, setHover] = useState(false);
  return (
    <Button
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="button"
      type="button"
      onClick={() => nextSlider()}
      onKeyPress={() => nextSlider()}
      tabIndex={0}
    >
      <RightMin hover={hover}/>
    </Button>
  );
};


const Slider = ({children}) => {
  const [number, setNumber] = useState(0);
  const prevSlider = () => {
    setNumber(number === 0 ? children.length - 1 : number - 1);
  };
  const nextSlider = () => {
    setNumber(number === children.length - 1 ? 0 : number + 1);
  };


  return (
    <Container>
      <Prev prevSlider={prevSlider}/>
      {children[number]}
      <Next nextSlider={nextSlider}/>
    </Container>
  );
};

export default Slider;
