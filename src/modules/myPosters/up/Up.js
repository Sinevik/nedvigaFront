import React, {useState} from 'react';
import styled from 'styled-components';

const Content = styled.p`
    padding: 20px;
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #FFCB68;
    :hover {
      color: #1E8161;
  }  
    @media (max-width: 1024px) {
      font-size: 10px;
      padding: 5px;
  }  
`;


const Up = ({id, handlerUp}) => {
  const [up, setUp] = useState(false);
  return (
    <React.Fragment>
      {!up ? (
         <Content onClick={() => {
           setUp(true);
           handlerUp(id);
         }}>
            Up
         </Content>
       ) : null}
    </React.Fragment>
  );
};

export default Up;
