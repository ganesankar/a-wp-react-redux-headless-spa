// Postlist page sagas
import { put } from 'redux-saga/effects';

import logger from '../../shared/logger/logger';
import axios from '../../shared/axiosInstanceWpress';
import * as actions from '../actions';
import apiConfig from '../../config/wpressAPIConfig';

axios.defaults.timeout = 10000;
// fetchPostlistDataSaga

export function* fetchPostListDataSaga(action, paramId) {
  yield put(actions.fetchPostListDataStart());
  const addpage = action.page || 1;
  logger.info('actionpost', action);
  let fetchPostListDataApiLink = `${apiConfig().FETCH_POSTLIST_PAGE_DATA.url}?page=${addpage}`;
  if ((action.slug.length > 0) && (action.slug !== 'post')) {
    fetchPostListDataApiLink = `${apiConfig().FETCH_CATEGORYLIST_PAGE_DATA.url}?slug=${action.slug}&page=${addpage}`;
  }


  try {
    const fetchPostListDataApi = apiConfig().FETCH_POSTLIST_PAGE_DATA.url;
    const response = yield axios.get(
      fetchPostListDataApiLink,
      fetchPostListDataApi.headers
    );
    yield put(actions.fetchPostListDataSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchPostListDataFailed(error));
  }
}
