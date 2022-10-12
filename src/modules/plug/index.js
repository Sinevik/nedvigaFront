import React, {useEffect, useState} from 'react';
import {Portal} from 'react-portal';
import styled from 'styled-components';
import axios from 'axios';
import Posters from './posters/';
import Map from './map';


const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  margin: auto;
  width: 80vw;
  padding: 16px 0px 0px 0px;
  @media (max-width: 1024px) {
    width: 98%;
    padding: 5px 0px 0px 0px;
  }
  max-width: 1300px;
`;

const Plug = ({history}) => {
  const [posters, setPosters] = useState([]);
  const getPosters = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/getPostersHome`);
    setPosters(response.data.posters);
  };

  useEffect(() => {
    getPosters();
  }, []);
  return (
    <Portal node={document && document.getElementById('plug')}>
      <Container>
        <Content>
          <Map history={history}/>
          <Posters posters={posters}/>
        </Content>
      </Container>
    </Portal>
  );
};

export default Plug;
