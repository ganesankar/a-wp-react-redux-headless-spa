// Postlist page sagas
import { put } from 'redux-saga/effects';

import logger from '../../shared/logger/logger';
import axios from '../../shared/axiosInstanceWpress';
import * as actions from '../actions';
import apiConfig from '../../config/wpressAPIConfig';

axios.defaults.timeout = 10000;
// fetchPostlistDataSaga

export function* fetchPostTypeListDataSaga(action, paramId) {
  logger.info('ffl', action);
  yield put(actions.fetchPostTypeListDataStart());
  let fetchpostTypeListDataApiLink = `${apiConfig().FETCH_POSTLIST_PAGE_DATA.url}`;
  const page = action.page || 1;
  if (action.posttype.length > 0) {
    fetchpostTypeListDataApiLink = `${apiConfig().FETCH_POSTTYPELIST_PAGE_DATA.url}${action.posttype}&page=${page}`;
  }


  try {
    const fetchpostTypeListDataApi = apiConfig().FETCH_POSTTYPELIST_PAGE_DATA.url;
    const response = yield axios.get(
      fetchpostTypeListDataApiLink,
      fetchpostTypeListDataApi.headers
    );
    yield put(actions.fetchPostTypeListDataSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchPostTypeListDataFailed(error));
  }
}
