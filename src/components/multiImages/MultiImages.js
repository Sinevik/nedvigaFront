import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import Item from './item/Item';
import Loader from 'react-js-loader';
import { useMedia } from 'react-media'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({width}) => width};
  height: auto;
  padding: 20px 0px 0px 0px;
`;

const Area = styled.div`
  display: flex;
  width: 100%;
  min-height: ${({height}) => height};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({dragging}) => dragging ? '#FFEBC2' : '#E1F1E3'};
  border-radius: 16px;
  box-shadow: 0px 0px 34px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;

const Label = styled.label`
  cursor: pointer;
  padding: 10px;
  background: #A2A7AE;
  border-radius: 8px;
`;

const Input = styled.input`
    display: none;
`;

const Paragraph = styled.div`
  margin: 0px;
  padding: 0px 0px 0px 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 12px;
  letter-spacing: 0.005em;
  color: #000000;
`;

const Content = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const MultiImages = ({
  setPathPictures,
  setPictures,
  setMasterPicture,
  /* --------*/
  reduxField,
  pictures,
  masterPicture,
  height,
  width,
  hook,
}) => {
  const {t} = useTranslation();
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 800px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const callHook = chooseHook(hook);
  const {handlerDeleteFile, handlerUploadFile, drop, dragging, handlerMasterPicture, spinner} = callHook({
    setMasterPicture,
    setPictures,
    setPathPictures,
    reduxField,
    pictures,
    t,
  });
  return (
    <Container
      dragging={dragging}
      ref={drop}
      width={width}
      onDrop={(e) => console.log(e)}
    >
      <Header>
        <Label
          htmlFor={0}
        >
          <Paragraph>
            {t('add-photo')}
          </Paragraph>
          <Input
            id={0}
            multiple
            type="file"
            onChange={handlerUploadFile}
            accept="image/*"
          />
        </Label>
      </Header>
      <Area height={height} ref={drop} dragging={dragging}>
        {spinner ? (
          <Loader
            type="box-rotate-z"
            bgColor={'#1C7F62'}
            title={t('deleting')}
            color={'#cc1f1f'}
            size={100}/>
        ) : (
          <React.Fragment>
            {pictures.length === 0 && !small ? (
              <Paragraph>
                {t('drag-photo')}
              </Paragraph>
            ) : (
              <Content>
                {pictures.map((item, index) => {
                  return (
                    <Item
                      key={index}
                      item={item}
                      index={index}
                      master={index === masterPicture}
                      path={item.path}
                      handlerClick={(index) => handlerMasterPicture(index)}
                      handlerDelete={(item) => handlerDeleteFile(item)}
                    />
                  );
                })}
              </Content>
            )}
          </React.Fragment>
        )}
      </Area>
    </Container>
  );
};


const mapStateToProps = (state, ownProps) => ({
  pictures: state[ownProps.reducer][ownProps.reduxField],
  masterPicture: state[ownProps.reducer].masterPicture,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiImages);

MultiImages.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  setPathPictures: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.any).isRequired,
  hook: PropTypes.string.isRequired,
};
