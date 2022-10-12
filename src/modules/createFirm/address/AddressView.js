import React from 'react';
import AddressHook from './AddressHook';
import Modal from '../../../components/modal/Modal';
import {Button, Container, Content, Section, Wrapper} from '../style/style';
import {default as But} from '../../../components/button/Button';
import AddCoord from '../../../components/addСoord/AddCoord';
import ListCoord from '../../../components/listCoord/ListCoord';


const AddressView = () => {
  const {
    handlerModal,
    centerMap,
    address,
    open,
    small,
  } = AddressHook();
  return (
    <Container>
      <Content width="330px">
        <Section>
          <ListCoord
            width="100%"
            height="100px"
            reduxField="address"
            reducer="createFirm"
            numberField={5}
            hook="redux"
          />
        </Section>
        <Section>
          <Wrapper width="100%" justify="space-between" direction="row" align="center">
            {address.length < 10 ? (
              <But
                value="add-an-address"
                width="160px"
                height="48px"
                fontSize="15px"
                borderRadius="4px"
                backgroundColor="#FFFFFF"
                onFocusColor="#43B949"
                fontColor="#63637E"
                onFocusFontColor="#F9F9FB"
                border="1px solid #EFEFF5"
                onFocusBorder="none"
                hook="parent"
                parentFunction={() => handlerModal()}
                fieldsCheckForDisabled={[
                  true,
                ]}
              />
            ) : null}
            <Button
              fieldsCheckForDisabled={[
                address.length > 0,
              ]}
            />
          </Wrapper>
        </Section>
      </Content>
      <Modal
        show={open}
        handlerClose={() => handlerModal()}

      >
        <Wrapper width={small ? '300px' : '600px'}>
          <AddCoord
            handlerClose={() => handlerModal()}
            centerMap={centerMap}
            reduxField="address"
            reducer="createFirm"
            numberField={5}
            hook="subFormRedux"
          />
        </Wrapper>
      </Modal>
    </Container>
  );
};

export default AddressView;
