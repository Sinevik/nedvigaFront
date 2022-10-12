import React, {useEffect, useRef, useState} from 'react';
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
      show,
      handlerClose,
      notfixed,
    },
) => {
  const [open, setOpen] = useState(false);
  const useOutside = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
          handlerClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, open]);
  };
  const wrapperRef = useRef(null);
  useOutside(wrapperRef);
  useEffect(() => {
    setOpen(show);
    if (show && !notfixed) {
      document.body.classList.add('prevent-scroll');
    } else {
      document.body.classList.remove('prevent-scroll');
    }
    return () => {
      document.body.classList.remove('prevent-scroll');
    };
  }, [show]);


  return (
    <div>
      {open ? (
        <Container>
          <Content ref={wrapperRef}>
            {children}
          </Content>
        </Container>
      ) : null}
    </div>

  );
};

export default Modal;
