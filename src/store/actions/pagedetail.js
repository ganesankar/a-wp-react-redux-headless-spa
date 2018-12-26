// page detail page reducer
import * as actionTypes from '../actions/actionTypes';
import logger from '../../shared/logger/logger';

export const fetchPageDetail = (slug) => ({
  type: actionTypes.FETCH_PAGE_DETAIL,
  slug
});

export const fetchPageDetailStart = () => ({
  type: actionTypes.FETCH_PAGE_DETAIL_START
});

export const fetchPageDetailSuccess = pageDetailData => {
  logger.debug('action', pageDetailData);
  return {
    type: actionTypes.FETCH_PAGE_DETAIL_SUCCESS,
    pageDetailData
  };
};

export const fetchPageDetailFailed = error => {
  logger.debug('fetchPageDetailFailed ', error);
  return {
    type: actionTypes.FETCH_PAGE_DETAIL_FAILED,
    error
  };
};

export const clearPageDetail = () => ({
  type: actionTypes.CLEAR_PAGE_DETAIL
});
