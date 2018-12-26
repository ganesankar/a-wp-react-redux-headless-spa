// page detail sagas
import { put } from 'redux-saga/effects';
import logger from '../../shared/logger/logger';
import axios from '../../shared/axiosInstanceWpress';
import * as actions from '../actions';
import apiConfig from '../../config/wpressAPIConfig';

// fetchPageDetailSaga
export function* fetchPageDetailSaga(action) {
  yield put(actions.fetchPageDetailStart());
  logger.info('ufetchPageDetailSaga', action);
  const pageDetailsLink = `${apiConfig().FETCH_PAGE_DETAIL_DATA.url}?slug=${action.slug}`;
  try {
    const response = yield axios.get(pageDetailsLink, apiConfig().FETCH_PAGE_DETAIL_DATA.headers);
    yield put(actions.fetchPageDetailSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchPageDetailFailed(error));
  }
}

