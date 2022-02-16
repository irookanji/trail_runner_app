import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { getAllProducts } from './actions';

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));
store.dispatch(getAllProducts());

ReactDom.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root'),
);
