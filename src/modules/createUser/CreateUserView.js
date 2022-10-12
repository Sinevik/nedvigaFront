import React from 'react';
import InputText from '../../components/inputText/InputText';
import Phone from '../../components/phone/Phone';
import Contacts from '../../components/addContacts/AddContacts';
import {CreateUserHook} from './CreateUserHook';
import InputPicture from '../../components/inputPicture/InputPicture';
import {Container, Content, Section, Title, Wrapper} from './style/style';
import Error from './style/error/Error';
import Button from './style/button/Button';
import {useTranslation} from 'react-i18next';


const getValidation = (
    {
      mode,
      user,
      firstName,
      lastName,
      webSite,
      email,
      sideEffects,
    },
) => {
  const arr = [firstName.valid, !sideEffects];
  if (mode === 'edit') {
    if (user.lastName) {
      arr.push(lastName.valid);
    }
    if (user.publicEmail) {
      arr.push(email.valid);
    }
    if (user.webSite) {
      arr.push(webSite.valid);
    }
  }
  return arr;
};


const CreateUserView = () => {
  const {
    small,
    mode,
    lastName,
    webSite,
    email,
    user,
    error,
    avatar,
    sideEffects,
    firstName,
    goToCreateUser,
  } = CreateUserHook();
  const {t} = useTranslation();
  return (
    <Container>
      <Content width={small ? '100%' : '412px'}>
        <Section>
          <Title>
            {t('avatar')}
          </Title>
          <InputPicture
            title={0}
            path={avatar[0].path}
            width="140px"
            height="140px"
            heightLoader="70px"
            widthLoader="70px"
            hook="redux"
            reduxField="avatar"
            reducer="createUser"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-a-name')} *
          </Title>
          <InputText
            hook="redux"
            maxLength={40}
            width="100%"
            height="56px"
            fontSize="10px"
            placeholder="text"
            reduxField="firstName"
            reducer="createUser"
            rule="empty"
            direction="column"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-a-last-name')}
          </Title>
          <InputText
            hook="redux"
            maxLength={40}
            width="100%"
            height="56px"
            fontSize="10px"
            placeholder="text"
            reduxField="lastName"
            rule="empty"
            reducer="createUser"
            direction="column"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-a-public-email-visible-to-other-uses')}
          </Title>
          <InputText
            hook="redux"
            maxLength={40}
            width="100%"
            height="56px"
            fontSize="10px"
            placeholder="text"
            reduxField="email"
            rule="email"
            reducer="createUser"
            direction="column"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-the-name-of-the-site')}
          </Title>
          <InputText
            hook="redux"
            maxLength={40}
            width="100%"
            height="56px"
            fontSize="10px"
            placeholder="text"
            reduxField="webSite"
            rule="url"
            reducer="createUser"
            direction="column"
          />
        </Section>
        <Section>
          <Title>
            {t('phone')}
          </Title>
          <Phone
            width="100%"
            height="56px"
            fontSize="10px"
            direction="column"
            reduxField="phone"
            reducer="createUser"
            numberField={3}
            hook="redux"
          />
        </Section>
        <Wrapper
          padding="50px 0px 50px 0px"
          direction="row"
          justify="flex-start"
        >
          <Section>
            <Title>
              {t('add-your-own-way-of-communication')}
            </Title>
            <Contacts
              width="190px"
              height="56px"
              fontSize="15px"
              reduxField="contacts"
              reducer="createUser"
              numberField={5}
              hook="redux"
            />
          </Section>
        </Wrapper>
        <Error errors={error}/>
        <Button
          value="send"
          sideEffects={sideEffects}
          parentFunction={() => goToCreateUser()}
          fieldsCheckForDisabled={getValidation({
            mode,
            firstName,
            lastName,
            webSite,
            email,
            user,
            sideEffects,
          })}
        />
      </Content>
    </Container>
  );
};

export default CreateUserView;
