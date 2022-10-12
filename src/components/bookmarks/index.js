import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from '../../svg/components';

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

const WrapperBookmarks = styled.div`
    width: 24px;
    height: 24px;
`;


const Bookmarks = () => {
  const history = useHistory();
  const handlerClick = () => {
    history.push('/myPosters/bookmark');
  };
  return (
    <Container
      onClick={() => handlerClick()}
    >
      <WrapperBookmarks>
        <Icon
          name="bookmarks"
        />
      </WrapperBookmarks>
    </Container>
  );
};

export default Bookmarks;
