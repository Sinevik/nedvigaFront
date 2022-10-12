import React from 'react';
import styled from 'styled-components';
import {urlProcessing} from '../../../common/image';


const Container = styled.div`
  width: 160px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paragraph = styled.div`
  margin: 0px;
  padding: 10px 0px 0px 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #9595B1;
`;

const Image = styled.div`
  background-image: url(${({avatar}) => urlProcessing(avatar, 30)});
  width: 130px;
  height: 130px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
`;


const Avatar = (
    {
      nickName,
      avatar,
    },
) => {
  return (
    <Container>
      <Image avatar={avatar}/>
      <Paragraph>
        {nickName}
      </Paragraph>
    </Container>
  );
};

export default Avatar;
