import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/store';
import App from './modules/App';
import Plug from './modules/plug';
import Footer from './modules/footer';
import './i18n';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>,
    document.querySelector('#root'),
);

ReactDOM.render(
    <Footer/>,
    document.querySelector('#footer'),
);
