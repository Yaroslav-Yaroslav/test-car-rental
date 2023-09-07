import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import {  store } from 'redux/store';
import { Provider } from 'react-redux';
// import Loader from 'components/Loader/Loader';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import './fonts.css';

const theme = {
  colors: {
    black: '#212121',
    error: 'orangered',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  // </React.StrictMode>
);

// <BrowserRouter basename="/test-car-rental">
