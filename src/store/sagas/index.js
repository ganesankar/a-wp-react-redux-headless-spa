// Main Index Saga
import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchPostTypeListDataSaga } from './posttypelist';
import { fetchPostListDataSaga } from './postlist';
import { fetchPostDetailSaga } from './postdetail';
import { fetchPageDetailSaga } from './pagedetail';

// watcher for Post List
export function* watchPostTypeList() {
  yield takeEvery(actionTypes.FETCH_POSTTYPELIST_DATA, fetchPostTypeListDataSaga);
}
// watcher for Post List only
export function* watchPostList() {
  yield takeEvery(actionTypes.FETCH_POSTLIST_DATA, fetchPostListDataSaga);
}

// watcher for Post details
export function* watchPostdetails() {
  yield takeEvery(actionTypes.FETCH_POST_DETAIL, fetchPostDetailSaga);
}
// watcher for Page details
export function* watchPagedetails() {
  yield takeEvery(actionTypes.FETCH_PAGE_DETAIL, fetchPageDetailSaga);
}

