// post details sagas
import { put } from 'redux-saga/effects';
import logger from '../../shared/logger/logger';
import axios from '../../shared/axiosInstanceWpress';
import * as actions from '../actions';
import apiConfig from '../../config/wpressAPIConfig';

// fetchPostDetailSaga
export function* fetchPostDetailSaga(action) {
  yield put(actions.fetchPostDetailStart());
  logger.info('ufetchPostDetailSaga', action);
  let postDetailsLink = `${apiConfig().FETCH_POSTDETAIL_PAGE_DATA.url}?$slug=${action.slug}`;
  if (action.posttype) {
    postDetailsLink = `${apiConfig().FETCH_POSTDETAIL_PAGE_DATA.url}?post_type=${action.posttype}&slug=${action.slug}`;
  }
  logger.info('fetchPostDetailSaga', postDetailsLink);
  try {
    const response = yield axios.get(postDetailsLink, apiConfig().FETCH_POSTDETAIL_PAGE_DATA.headers);
    yield put(actions.fetchPostDetailSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchPostDetailFailed(error));
  }
}

