// Post Detail Details Reducer
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import logger from '../../shared/logger/logger';

const initialState = {
  postDetailPageData: null,
  result: null,
  error: null,
  loading: true
};

// fetchPostDataStart

const fetchPostDetailDataStart = (state, action) => {
  logger.info('fetchPostDetailDataStart', action);
  return updateObject(state, {
    loading: true
  });
};

// fetchPostDetailDataSuccess
const fetchPostDetailDataSuccess = (state, action) => {
  logger.info('fetchPostDetailDataSuccess', action);
  return updateObject(state, {
    postDetailPageData: action.PostDetailDetailsData,
    loading: false,
  });
};

// fetchPostDetailDataFailed
const fetchPostDetailDataFailed = (state, action) => updateObject(state, { loading: false, error: action.error });


// fetchPostDetailDataReset
const fetchPostDetailDataReset = (state, action) =>
  updateObject(initialState, { loading: true });


// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POST_DETAIL_START:
      return fetchPostDetailDataStart(state, action);
    case actionTypes.FETCH_POST_DETAIL_SUCCESS:
      return fetchPostDetailDataSuccess(state, action);
    case actionTypes.FETCH_POST_DETAIL_FAILED:
      return fetchPostDetailDataFailed(state, action);
    case actionTypes.CLEAR_POST_DETAIL:
      return fetchPostDetailDataReset(state, action);
    default:
      return state;
  }
};

export default reducer;
