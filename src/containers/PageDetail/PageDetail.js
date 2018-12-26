// Page Details Container
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import queryString from 'query-string';
import * as actions from '../../store/actions';
import css from './PageDetail.css';

import axios from '../../shared/axiosInstanceWpress';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import PostTitle from '../../components/Post/Title/Title';
import PostBgrTitle from '../../components/Post/BgrTitle/BgrTitle';
import PostContent from '../../components/Post/Content/Content';
import PostList from '../../components/Post/PostList/PostList';
import * as appConstants from '../../shared/appConstants';
import logger from '../../shared/logger/logger';


class PageDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statePath: '',
    };
    this.checkAndLoadContent = this.checkAndLoadContent.bind(this);
  }

  componentDidMount() {
    logger.info('loading Page');
    const queryParams = this.props.location.search;
    const queryParamsObj = queryString.parse(queryParams);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    const { slug } = this.props.match.params;
    this.state.slug = slug;
    this.state.page = queryParamsObj.page || 0;
    this.props.onFetchPageDetail(slug);
    this.checkAndLoadContent();
  }
  componentWillReceiveProps(nextProps) {
    let paramschange = false;
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      const { slug } = nextProps.match.params;
      this.state.slug = slug;
      paramschange = true;
      this.props.onFetchPageDetail(slug);
    }
    const newparams = nextProps.location.search;
    const oldparams = this.props.location.search;

    const queryParams = this.props.location.search;
    const queryParamsObj = queryString.parse(nextProps.location.search);
    if (newparams !== oldparams) {
      this.state.page = queryParamsObj.page || 0;
      paramschange = true;
    }
    if (paramschange) {
      this.checkAndLoadContent();
    }
  }
  componentWillUnmount() {
    this.props.onFetchPostTypeListReset();
  }
  checkAndLoadContent(slug, type) {
    console.log('checkAndLoadContent', this.props.history.location.pathname);
    const lastIndex = appConstants.headerMenu.findIndex(val => val.link === this.props.history.location.pathname);
    if ((lastIndex > 0) && appConstants.headerMenu[lastIndex].loadContent) {
      const headerMenuCon = appConstants.headerMenu[lastIndex].loadContent;

      if (headerMenuCon.postType) {
        this.setState({
          statePath: headerMenuCon.postType
        });

        console.log('checkAndLoadContent ', headerMenuCon.postType);
        this.props.onFetchPostTypeList('', headerMenuCon.postType, this.state.page);
      }
    }
  }
  render() {
    let pageContent = null;
    let pageTypeContent = null;
    if (this.props.loading) {
      pageContent = <Spinner />;
    }
    if (!this.props.loading && this.props.pageDetailData) {
      pageContent = (
        <Aux>
          <PostBgrTitle titleContent={this.props.pageDetailData.page} contentType="page" />
          <div className={css.pageContainer}>
            <PostContent content={this.props.pageDetailData.page} contentType={this.state.slug} />
          </div>
        </Aux>);
    }
    if (!this.props.loading && this.props.postListResponse) {
      pageTypeContent = (
        <Aux>
          <PostList row="2" article="article" display="all" postData={this.props.postListResponse} type={this.state.statePath} contentType={this.state.slug} />
        </Aux>);
    }
    return (
      <div className={css.postContainer}>
        <div className="minhight90vh">
          {pageContent}
          {pageTypeContent}
        </div>
      </div>
    );
  }
}
const mapSateToProps = state => ({
  pageDetailData: state.pagedetail.pageDetailData,
  postListResponse: state.posttypelist.posttypelistPageData,
  error: state.pagedetail.error,
  loading: state.pagedetail.loading,
});

const mapDispatchToProps = dispatch => ({
  onFetchPageDetail: (slug) => dispatch(actions.fetchPageDetail(slug)),
  onFetchPostTypeListReset: () =>
    dispatch(actions.fetchPostTypeListDataReset()),
  onFetchPostTypeList: (slug, posttype, page) =>
    dispatch(actions.fetchPostTypeListData(slug, posttype, page))
});


const postDetailConnect = withErrorHandler(PageDetail, axios, 'otpError');

export default connect(mapSateToProps, mapDispatchToProps)(postDetailConnect);
