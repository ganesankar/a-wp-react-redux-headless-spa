import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import 'typeface-roboto';// eslint-disable-line
import 'bootstrap/dist/css/bootstrap.min.css';

import logger from './shared/logger/logger';
import App from './App';
import postlistReducer from './store/reducers/postlist';
import posttypelistReducer from './store/reducers/posttypelist';
import postdetailReducer from './store/reducers/postdetail';
import pagedetailReducer from './store/reducers/pagedetail';
import {
  watchPostList,
  watchPostTypeList,
  watchPostdetails,
  watchPagedetails,
} from './store/sagas';

// register redux dev tools when in development mode.
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
/* eslint-enable */

// make ajax call to api to save any unhandled error on server
window.onerror = (message, url, lineNumber) => {
  logger.logToServer(message, { url, lineNumber });
  return true;
};

// Combine reducers
const rootReducer = combineReducers({
  postlist: postlistReducer,
  posttypelist: posttypelistReducer,
  postdetail: postdetailReducer,
  pagedetail: pagedetailReducer,

});

// createSagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// createStore
const store = createStore(
  rootReducer, // pass combined reducer here once the remaining reducers are added
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// register sagas
sagaMiddleware.run(watchPostList);
sagaMiddleware.run(watchPostTypeList);
sagaMiddleware.run(watchPostdetails);
sagaMiddleware.run(watchPagedetails);
// sagaMiddleware.run(watchotpverify);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

