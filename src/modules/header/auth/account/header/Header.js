import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../../svg/account';

const Container = styled.div`
    width: 100%;
    height: 84px;
    background: #1C7F62;
    padding: 0px 0px 0px 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 16px 0px 0px;
`;

const RightSide = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    align-items: flex-start;
`;

const Email = styled.p`
    width: 100%;
    padding: 0px 0px 4px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #43B949;
`;

const NickName = styled.p`
    width: 100%;
    padding: 0px 0px 4px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const WrapperImage = styled.div`
    width: 36px;
    height: 36px;
`;


const Header = (
    {
      nickName,
      email,
    },
) => (
  <Container>
    <Content>
      <LeftSide>
        <WrapperImage>
          <Icon name="account"/>
        </WrapperImage>
      </LeftSide>
      <RightSide>
        <Email>
          {email}
        </Email>
        <NickName>
          {nickName}
        </NickName>
      </RightSide>
    </Content>
  </Container>
);


export default Header;
