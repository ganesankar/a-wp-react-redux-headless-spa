// post list action dispatchers
import * as actionTypes from './actionTypes';
import logger from '../../shared/logger/logger';

export const fetchPostListData = (slug, page) => ({
  type: actionTypes.FETCH_POSTLIST_DATA,
  slug,
  page
});

export const fetchPostListDataStart = () => ({
  type: actionTypes.FETCH_POSTLIST_DATA_START
});

export const fetchPostListDataSuccess = postlistPageData => {
  logger.debug('action', postlistPageData);
  return {
    type: actionTypes.FETCH_POSTLIST_DATA_SUCCESS,
    postlistPageData
  };
};

export const fetchPostListDataFailed = error => ({
  type: actionTypes.FETCH_POSTLIST_DATA_FAILED,
  error
});

export const fetchPostListDataReset = () => ({
  type: actionTypes.FETCH_POSTLIST_DATA_RESET
});
