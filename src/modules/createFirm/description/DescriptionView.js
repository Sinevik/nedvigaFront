import React from 'react';
import {Button, Container, Content, Section, Title, Wrapper} from '../style/style';
import InputText from '../../../components/inputText/InputText';
import InputPicture from '../../../components/inputPicture/InputPicture';
import TextArea from '../../../components/textArea/TextArea';
import PhoneNumbers from '../../../components/phone/Phone';
import AddCommunMethod from '../../../components/addContacts/AddContacts';
import {DescriptionHook} from './DescriptionHook';
import {useTranslation} from 'react-i18next';


const DescriptionView = () => {
  const {
    avatar,
    unpPhoto,
    small,
    phone,
    unp,
    legalName,
    email,
    description,
  } = DescriptionHook();
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
            width="112px"
            height="112px"
            hook="redux"
            reduxField="avatar"
            reducer="createFirm"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-the-legal-name')} *
          </Title>
          <InputText
            maxLength={100}
            placeholder="text"
            width="100%"
            height="56px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="legalName"
            rule="empty"
            reducer="createFirm"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-the-unp')} *
          </Title>
          <InputText
            maxLength={100}
            placeholder="text"
            width="100%"
            height="56px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="unp"
            rule="empty"
            reducer="createFirm"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-email')} *
          </Title>
          <InputText
            maxLength={100}
            placeholder="text"
            width="100%"
            height="56px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="email"
            rule="email"
            reducer="createFirm"
          />
        </Section>
        <Section>
          <Title>
            {t('attach-a-photo-of-the-document-with-the-unp')} *
          </Title>
          <InputPicture
            title={0}
            path={unpPhoto[0].path}
            width="140px"
            height="140px"
            hook="redux"
            reduxField="unpPhoto"
            reducer="createFirm"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-the-name-of-the-site')}
          </Title>
          <InputText
            maxLength={100}
            placeholder="text"
            width="100%"
            height="56px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="webSite"
            rule="url"
            reducer="createFirm"
          />
        </Section>
        <Section>
          <Title>
            {t('detailed-description')}
          </Title>
          <TextArea
            width="100%"
            height="100px"
            fontSize="20px"
            reducer="createFirm"
            maxLength={100}
            reduxField="description"
            hook="redux"
          />
        </Section>
        <Section>
          <Title>
            {t('phone')} *
          </Title>
          <PhoneNumbers
            width="100%"
            height="56px"
            fontSize="10px"
            direction="column"
            reduxField="phone"
            reducer="createFirm"
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
            <AddCommunMethod
              width="150px"
              height="56px"
              fontSize="15px"
              reduxField="contacts"
              reducer="createFirm"
              numberField={5}
              hook="redux"
            />
          </Section>
        </Wrapper>
        <Wrapper align="center">
          <Button
            fieldsCheckForDisabled={[
              unpPhoto[0].path,
              legalName.valid,
              unp.valid,
              email.valid,
              phone[0].valid,
              description,
            ]}
          />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default DescriptionView;
