// Page Detail Details Reducer
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import logger from '../../shared/logger/logger';

const initialState = {
  pageDetailData: null,
  result: null,
  error: null,
  loading: true
};

// fetchPageDataStart

const fetchPageDetailDataStart = (state, action) => {
  logger.info('fetchPageDetailDataStart', action);
  return updateObject(state, {
    loading: true
  });
};

// fetchPageDetailDataSuccess
const fetchPageDetailDataSuccess = (state, action) => {
  logger.info('fetchPageDetailDataSuccess', action);
  return updateObject(state, {
    pageDetailData: action.pageDetailData,
    loading: false,
  });
};

// fetchPageDetailDataFailed
const fetchPageDetailDataFailed = (state, action) => updateObject(state, { loading: false, error: action.error });


// fetchPageDetailDataReset
const fetchPageDetailDataReset = (state, action) =>
  updateObject(initialState, { loading: true });


// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PAGE_DETAIL_START:
      return fetchPageDetailDataStart(state, action);
    case actionTypes.FETCH_PAGE_DETAIL_SUCCESS:
      return fetchPageDetailDataSuccess(state, action);
    case actionTypes.FETCH_PAGE_DETAIL_FAILED:
      return fetchPageDetailDataFailed(state, action);
    case actionTypes.CLEAR_PAGE_DETAIL:
      return fetchPageDetailDataReset(state, action);
    default:
      return state;
  }
};

export default reducer;
