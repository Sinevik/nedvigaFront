import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`;

const Content = styled.div``;

const Modal = (
    {
      children,
      handlerClose,
    },
) => {
  const useOutside = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handlerClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutside(wrapperRef);

  useEffect(() => {
    document.body.classList.add('prevent-scroll');
    document.documentElement.classList.add('prevent-scroll');
  }, []);

  useEffect(() => () => {
    document.body.classList.remove('prevent-scroll');
    document.documentElement.classList.remove('prevent-scroll');
  }, []);

  return (
    <Container>
      <Content ref={wrapperRef}>
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
