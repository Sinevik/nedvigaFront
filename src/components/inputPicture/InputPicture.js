import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Loader from 'react-js-loader';
import styled from 'styled-components';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import {Icon} from '../../svg/components';
import {useMedia} from 'react-media';
import {urlProcessing} from '../../common/image';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: ${({height}) => height};
    padding: 0px 0px 8px 0px;
    box-sizing: content-box;
`;

const Label = styled.label`
    cursor: pointer;
`;

const WrapperImage = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    background:  ${({img}) => img ? `url(${urlProcessing(img, 30)}) no-repeat` : 'white'};
    background-size: cover;
    border: 1px solid #EFEFF5;
    box-sizing: border-box;
    border-radius: 4px; 
`;

const WrapperDefault = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background: #F9F9FB;
    border: 1px solid ${({hover}) => hover ? '#000000' : '#EFEFF5'};
    box-sizing: border-box;
    border-radius: 4px;
`;

const Input = styled.input`
    display: none;
`;

const WrapperSvg = styled.div`
    width: 48px;
    height: 48px;
`;

const SectionDelete = styled.div`
    width: 30px;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;


export const InputPicture = ({
  setPicture,
  /* --------*/
  reduxField,
  pictures,
  height,
  width,
  path,
  title,
  hook,
}) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const callHook = chooseHook(hook);
  const [hover, setHover] = useState(false);
  const {spinner, handlerUploadFile, handlerDeleteFile} = callHook({
    setPicture,
    reduxField,
    pictures,
    title,
    path,
  });
  useEffect(() => {
    setHover(false);
  }, [spinner]);
  return (
    <Container height={height}>
      <Label
        htmlFor={title}
        onMouseOver={() => {
          if (!small) {
            setHover(true);
          }
        }}
        onMouseLeave={() => setHover(false)}
      >
        {path ? (
          <WrapperImage
            width={width}
            height={height}
            img={path}
          />
        ) : (
          <WrapperDefault
            hover={hover}
            width={width}
            height={height}
            spinner={spinner}
            style={{
              ...styles.container,
            }}
          >
            {spinner ? (
              <Loader
                type="spinner-circle"
                bgColor="#3B8AE5"
                size={100}
              />
            ) : (
              <WrapperSvg>
                <Icon
                  name="upload"
                  hover={hover}
                />
              </WrapperSvg>
            )}
          </WrapperDefault>
        )}
        {!path && (
          <Input
            id={title}
            type="file"
            onChange={handlerUploadFile}
            accept="image/*"
          />
        )}
      </Label>
      <SectionDelete>
        {path && !spinner && (
          <WrapperSvg
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handlerDeleteFile}
          >
            <Icon name="delete" hover={hover}/>
          </WrapperSvg>

        )}
      </SectionDelete>
    </Container>
  );
};

/**/


const styles = {
  container: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionX: '50%',
    backgroundPositionY: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayNone: {
    display: 'none',
  },
};

const mapStateToProps = (state, ownProps) => ({
  pictures: state[ownProps.reducer][ownProps.reduxField],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(InputPicture);

InputPicture.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  path: PropTypes.string,
  title: PropTypes.number.isRequired,
  setPicture: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.any).isRequired,
  hook: PropTypes.string.isRequired,
};

InputPicture.defaultProps = {
  path: null,
};
