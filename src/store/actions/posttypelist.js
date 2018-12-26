// post type  list action dispatchers
import * as actionTypes from './actionTypes';
import logger from '../../shared/logger/logger';

export const fetchPostTypeListData = (slug, posttype, page) => ({
  type: actionTypes.FETCH_POSTTYPELIST_DATA,
  slug,
  posttype,
  page
});

export const fetchPostTypeListDataStart = () => ({
  type: actionTypes.FETCH_POSTTYPELIST_DATA_START
});

export const fetchPostTypeListDataSuccess = posttypelistPageData => {
  logger.debug('action', posttypelistPageData);
  return {
    type: actionTypes.FETCH_POSTTYPELIST_DATA_SUCCESS,
    posttypelistPageData
  };
};

export const fetchPostTypeListDataFailed = error => ({
  type: actionTypes.FETCH_POSTTYPELIST_DATA_FAILED,
  error
});

export const fetchPostTypeListDataReset = () => ({
  type: actionTypes.FETCH_POSTTYPELIST_DATA_RESET
});
