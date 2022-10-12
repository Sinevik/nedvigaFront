import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Item from './item/Item';
import Header from './header/Header';
import {Icon} from '../../../../svg/categories';
import {Icon as IconAccount} from '../../../../svg/account';
import {useMedia} from 'react-media';
import {urlProcessing} from '../../../../common/image';

const Container = styled.div`
    padding: 0px;
    height: 100%;
    position: relative;
    @media (max-width: 500px) {
      padding: 0px 10px 0px 0px;
    }
`;

const Content = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
`;

const Section = styled.div`
    padding: ${({padding}) => padding};
`;

const HoverBlock = styled.div`
    width: 70px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #F9F9FB;
      border-radius: 4px;
    }
`;


const WrapperImage = styled.div`
    width: 36px;
    height: 36px; 
    cursor: pointer;
    padding: ${({padding}) => padding};
`;

const WrapperArrow = styled.div`
    width: 15px;
    height: 15px;
    cursor: pointer;
    padding: ${({padding}) => padding};
`;

const Avatar = styled.div`
  background-image: url(${({avatar}) => urlProcessing(avatar, 60)});
  opacity: ${({active}) => active ? 0.5 : 1};
  width: 36px;
  height: 36px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
`;

const List = styled.div`
  min-width: ${({width}) => width};
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  z-index: 3;
  position: absolute;
  top: 100%;
  right: 10%;
`;

const WrapperAvatar = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
`;

const SectionArrow = styled.div`
    width: 20px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const getListContent = (
    {
      nickName,
      email,
      open,
      store,
      goToCreate,
      goToMyPosters,
      goToMyStore,
      goToSettings,
      goToPayments,
      logOut,
    },
) => {
  let result;

  if (open === 'account') {
    result = (
      <React.Fragment>
        <Header
          nickName={nickName}
          email={email}
        />
        <Item
          type="account"
          value="my-posters"
          handlerClick={goToMyPosters}
        />
        {store ? (
          <Item
            type="account"
            value="my-store"
            handlerClick={goToMyStore}
          />
        ) : null}
        <Item
          type="account"
          value="settings"
          handlerClick={goToSettings}
        />
        <Item
          type="account"
          value="payments"
          handlerClick={goToPayments}
        />
        <Item
          type="account"
          value="logout"
          handlerClick={logOut}
        />
      </React.Fragment>
    );
  }

  if (open === 'add') {
    result = (
      <React.Fragment>
        <Item
          value="flat"
          handlerClick={goToCreate}
        />
        <Item
          value="house"
          handlerClick={goToCreate}
        />
        <Item
          value="dacha"
          handlerClick={goToCreate}
        />
        <Item
          value="shed"
          handlerClick={goToCreate}
        />
        <Item
          value="land"
          handlerClick={goToCreate}
        />
        <Item
          value="room"
          handlerClick={goToCreate}
        />
        <Item
          value="commercial"
          handlerClick={goToCreate}
        />
      </React.Fragment>
    );
  }


  return result;
};


const Account = ({
  handlerPlug,
  goToCreate,
  goToMyPosters,
  goToMyStore,
  goToSettings,
  goToPayments,
  logOut,
  avatar,
  nickName,
  email,
  store,
}) => {
  const [open, setOpen] = useState(false);
  const useOutside = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          event.stopPropagation();
          setOpen(false);
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
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 800px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const handlerClick = ({type, setOpen, small, handlerPlug}) => {
    setOpen(type);
    if (small) {
      handlerPlug(true);
    }
  };
  return (
    <Container
      onMouseLeave={small ? () => console.log('leave') : () => setOpen(false)}
    >
      <Content>
        <Section padding="0px 20px 0px 0px">
          <HoverBlock onMouseOver={small ? null : () => setOpen('add')}>
            <WrapperImage
              onClick={() => handlerClick({
                type: 'add',
                setOpen,
                small,
                handlerPlug,
              })}
            >
              <Icon
                name="add"
                active={open === 'add'}
              />
            </WrapperImage>
          </HoverBlock>
        </Section>
        <Section padding="0px 0px 0px 0px">
          <HoverBlock onMouseOver={small ? null : () => setOpen('account')}>
            <WrapperAvatar
              onClick={() => handlerClick({
                type: 'account',
                setOpen,
                small,
                handlerPlug,
              })}
            >
              {avatar ? (
                <Avatar
                  avatar={avatar}
                  active={open === 'account'}
                />
              ) : (
                <WrapperImage>
                  <IconAccount
                    name="profile"
                    active={open === 'account'}
                  />
                </WrapperImage>
              )}
            </WrapperAvatar>
            <SectionArrow>
              <WrapperArrow>
                <IconAccount
                  name="arrow"
                  active={open === 'account'}
                />
              </WrapperArrow>
            </SectionArrow>
          </HoverBlock>
        </Section>
      </Content>
      {open ? (
        <List
          width={open === 'account' ? '204px' : '304px'}
          ref={wrapperRef}
          onClick={() => setOpen(false)}
        >
          {getListContent({
            open,
            store,
            nickName,
            email,
            goToCreate,
            goToMyPosters,
            goToMyStore,
            goToSettings,
            goToPayments,
            logOut,
          })}
        </List>
      ) : null}
    </Container>
  );
};


export default Account;
