// Userlist page reducer
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import logger from '../../shared/logger/logger';

// set initial state
const initialState = {
  postlistPageData: null,
  error: null,
  loading: true,
  id: null
};

// update state
const fetchPostListData = (state, action) => {
  updateObject(state, { loading: true, slug: action.slug });
};

// fetchPostListPageData
const fetchPostListDataStart = (state, action) =>
  updateObject(state, { loading: true });

// fetchPostListPageDataSuccess
const fetchPostListDataSuccess = (state, action) => {
  logger.debug('from reducer - action', action);
  return updateObject(state, {
    postlistPageData: action.postlistPageData,
    loading: false
  });
};

// fetchPostListPageDataFailed
const fetchPostListDataFailed = (state, action) =>
  updateObject(state, { loading: false, error: action.error });

// fetchPostListPageDataReset
const fetchPostListDataReset = (state, action) =>
  updateObject(initialState, { loading: true });

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTLIST_DATA_START:
      return fetchPostListDataStart(state, action);
    case actionTypes.FETCH_POSTLIST_DATA_SUCCESS:
      return fetchPostListDataSuccess(state, action);
    case actionTypes.FETCH_POSTLIST_DATA_FAILED:
      return fetchPostListDataFailed(state, action);
    case actionTypes.FETCH_POSTLIST_DATA_RESET:
      return fetchPostListDataReset(state, action);
    default:
      return state;
  }
};

export default reducer;
