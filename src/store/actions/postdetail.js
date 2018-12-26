// post detail page reducer
import * as actionTypes from '../actions/actionTypes';
import logger from '../../shared/logger/logger';

export const fetchPostDetail = (posttype, slug) => ({
  type: actionTypes.FETCH_POST_DETAIL,
  posttype,
  slug
});

export const fetchPostDetailStart = () => ({
  type: actionTypes.FETCH_POST_DETAIL_START
});

export const fetchPostDetailSuccess = PostDetailDetailsData => {
  logger.debug('action', PostDetailDetailsData);
  return {
    type: actionTypes.FETCH_POST_DETAIL_SUCCESS,
    PostDetailDetailsData
  };
};

export const fetchPostDetailFailed = error => {
  logger.debug('fetchPostDetailFailed ', error);
  return {
    type: actionTypes.FETCH_POST_DETAIL_FAILED,
    error
  };
};

export const clearPostDetail = () => ({
  type: actionTypes.CLEAR_POST_DETAIL
});
