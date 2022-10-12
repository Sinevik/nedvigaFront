import React from 'react';
import {Container, Content, Section, Title, Wrapper} from '../style/style';
import ContactsHook from './ContactsHook';
import CombineButton from '../../../components/combineButton/CombineButton';
import InputText from '../../../components/inputText/InputText';
import DropDown from '../../../components/dropDown/DropDown';
import Phone from '../../../components/phone/Phone';
import Contacts from '../../../components/addContacts/AddContacts';
import {useTranslation} from 'react-i18next';

const time = [
  '0:00',
  '1:00',
  '2:00',
  '3:00',
  '4:00',
  '5:00',
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];


const ContactsView = () => {
  const {t} = useTranslation();
  const {state, small} = ContactsHook();
  return (
    <Container>
      <Content width={small ? '100%' : '400px'}>
        <Section>
          <CombineButton
            reducer="createPoster"
            reduxField="typeSales"
            arrayValues={['owner', 'agency', 'developer', 'government']}
            width="100px"
            height="36px"
            fontSize="12px"
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
            height="36px"
            fontSize="10px"
            placeholder="text"
            reduxField="name"
            rule="empty"
            reducer="createPoster"
            direction="column"
          />
        </Section>
        {state.typeSales !== 'owner' ? (
          <Section>
            <Title>
              {t('legal-name')}
            </Title>
            <InputText
              hook="redux"
              maxLength={40}
              width="100%"
              height="36px"
              fontSize="10px"
              placeholder="text"
              reduxField="legalName"
              rule="empty"
              reducer="createPoster"
              direction="column"
            />
          </Section>
        ) : null}
        {state.typeSales === 'agency' || state.typeSales === 'developer' ? (
          <Section>
            <Title>
              {t('enter-the-unp')}
            </Title>
            <InputText
              hook="redux"
              maxLength={40}
              width="100%"
              height="36px"
              fontSize="10px"
              placeholder="text"
              reduxField="unp"
              rule="empty"
              reducer="createPoster"
              direction="column"
            />
          </Section>
        ) : null}
        <Section>
          <Title>
            {t('phone')} *
          </Title>
          <Phone
            width="100%"
            height="36px"
            fontSize="10px"
            direction="column"
            reduxField="phone"
            reducer="createPoster"
            numberField={3}
            hook="redux"
          />
        </Section>
        <Wrapper
          padding="50px 0px 50px 0px"
          direction="row"
          justify="flex-start">
          <Section>
            <Title>
              {t('add-your-own-way-of-communication')}
            </Title>
            <Contacts
              width="150px"
              height="36px"
              fontSize="15px"
              reduxField="contacts"
              reducer="createPoster"
              numberField={5}
              hook="redux"
            />
          </Section>
        </Wrapper>
        <Section>
          <Title>
            {t('call')}
          </Title>
          <Wrapper
            width={small ? '250px' : '100%'}
            direction="row"
            justify="space-between"
            align="center"
          >
            <DropDown
              hook="redux"
              reducer="createPoster"
              reduxField="callFrom"
              width={small ? '120px' : '220px'}
              height="36px"
              arrayValues={time}
              textOption="start"
            />
            <DropDown
              hook="redux"
              reducer="createPoster"
              reduxField="callTo"
              width={small ? '120px' : '220px'}
              height="36px"
              arrayValues={time}
              textOption="to"
            />
          </Wrapper>
        </Section>
      </Content>
    </Container>
  );
};

export default ContactsView;
