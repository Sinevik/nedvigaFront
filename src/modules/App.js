import React, {lazy, Suspense, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useMedia} from 'react-media';
import Test from './test/Test';
import Header from './header/HeaderView';
import HomeView from './home/HomeView';
import Public from './public';
import PostersView from './posters/PostersView';
import PosterView from './poster/PosterView';
import FirmView from './firm/FirmView';
import MyPostersView from './myPosters/MyPostersView';
import MarketView from './market/MarketView';
import Footer from './plug/';
import InfoUserView from './infoUser/InfoUserView';
import Loading from '../components/loading/Loading';
import Plug from '../components/plug/Plug';
import {Actions} from '../redux/Actions';


const Container = styled.div`
    width: 100%;
`;

const SubContainer = styled.div`
    width: 100%;
`;

const Content = styled.div`
  margin: auto;
  width: 80vw;
  @media (max-width: 1024px) {
      width: 98%;
      padding: 0px;
    }
  max-width: 1300px;
`;

const App = () => {
  const {
    getUser,
  } = Actions('user')(useDispatch());
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 800px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const {plug} = useSelector((state) => state.general);
  const FirmsView = lazy(() => import('./firms/FirmsView'));
  const CreateFirmView = lazy(() => import('./createFirm/CreateFirmView'));
  const CreatePosterView = lazy(() => import('./createPoster/CreatePosterView'));
  const LogInView = lazy(() => import('./auth/logIn/LogInView'));
  const SignInView = lazy(() => import('./auth/signIn/SignInView'));
  const SendEmailMainView = lazy(() => import('./auth/sendEmail/SendEmailMainView'));
  const ResetPasswordMainView = lazy(() => import('./auth/resetPassword/ResetPasswordMainView'));
  const CreateUserView = lazy(() => import('./createUser/CreateUserView'));

  useEffect(() => {
    getUser();
  }, []);


  return (
    <Container>
      {plug && small ? (
        <Plug/>
      ) : null}
      <BrowserRouter>
        <SubContainer>
          <Header/>
          <Content>
            <Suspense fallback={<Loading/>}>
              <Switch>
                <Route path="/logIn" component={LogInView}/>
                <Route path="/public" component={Public}/>
                <Route path="/signUp/:hash" component={SignInView}/>
                <Route path="/sendEmailForSignUp" component={SendEmailMainView}/>
                <Route path="/sendEmailForNewPassword" component={SendEmailMainView}/>
                <Route path="/resetPassword/:hash" component={ResetPasswordMainView}/>
                <Route path="/createUser" component={CreateUserView}/>
                <Route path="/infoUser/:id" component={InfoUserView}/>
                <Route path="/posters/:type/:lat?/:lng?" component={PostersView}/>
                <Route path="/firms/:type" component={FirmsView}/>
                <Route path="/myPosters/:kind" component={MyPostersView}/>
                <Route path="/poster/:type/:id" component={PosterView}/>
                <Route path="/firm/:id" component={FirmView}/>
                <Route path="/market" component={MarketView}/>
                <Route path="/createFirm/:type?" component={CreateFirmView}/>
                <Route path="/footer" component={Footer}/>
                <Route path="/createPoster/:kind/:type?" component={CreatePosterView}/>
                <Route path="/test" component={Test}/>
                <Route component={HomeView}/>
              </Switch>
            </Suspense>
          </Content>
        </SubContainer>
      </BrowserRouter>
    </Container>
  );
};


export default App;
