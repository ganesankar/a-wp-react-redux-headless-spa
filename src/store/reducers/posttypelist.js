// Post Type list reducer
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import logger from '../../shared/logger/logger';

// set initial state
const initialState = {
  posttypelistPageData: null,
  error: null,
  loading: true,
  id: null
};

// update state
const fetchpostTypeListData = (state, action) => {
  updateObject(state, { loading: true, slug: action.slug });
};

// fetchpostTypeListPageData
const fetchPostTypeListDataStart = (state, action) =>
  updateObject(state, { loading: true });

// fetchpostTypeListPageDataSuccess
const fetchPostTypeListDataSuccess = (state, action) => {
  logger.debug('from reducer - action', action);
  return updateObject(state, {
    posttypelistPageData: action.posttypelistPageData,
    loading: false
  });
};

// fetchpostTypeListPageDataFailed
const fetchPostTypeListDataFailed = (state, action) =>
  updateObject(state, { loading: false, error: action.error });

// fetchpostTypeListPageDataReset
const fetchpostTypeListDataReset = (state, action) =>
  updateObject(initialState, { loading: true });

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTTYPELIST_DATA_START:
      return fetchPostTypeListDataStart(state, action);
    case actionTypes.FETCH_POSTTYPELIST_DATA_SUCCESS:
      return fetchPostTypeListDataSuccess(state, action);
    case actionTypes.FETCH_POSTTYPELIST_DATA_FAILED:
      return fetchPostTypeListDataFailed(state, action);
    case actionTypes.FETCH_POSTTYPELIST_DATA_RESET:
      return fetchpostTypeListDataReset(state, action);
    default:
      return state;
  }
};

export default reducer;
