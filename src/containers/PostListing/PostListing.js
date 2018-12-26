// Post List container
import React, { Component } from 'react';
import { connect } from 'react-redux';


import logger from '../../shared/logger/logger';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../shared/axiosInstanceWpress';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import css from './PostListing.css';
import ErrorAction from '../../components/UI/ErrorAction/ErrorAction';
import PostList from '../../components/Post/PostList/PostList';

import * as appConstants from '../../shared/appConstants';
import PostBgrTitle from '../../components/Post/BgrTitle/BgrTitle';
import Pagination from '../../components/Post/Pagination/Pagination';


let initialItemsData = [];
class PostListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadOnce: false
    };
  }

  componentDidMount() {
    const { slug, page } = this.props.match.params;
    this.state.slug = slug || '';
    this.state.page = page || 1;
    this.props.onFetchPostListData(this.state.slug, this.state.page);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params !== this.props.match.params) {
      const { slug, page } = nextProps.match.params;
      this.state.slug = slug;
      this.state.page = page || 1;
      this.props.onFetchPostListData(slug, this.state.page);
    }
  }
  componentWillUnmount() {
    this.props.onFetchPostListDataReset();
  }


  render() {
    let PageAllContent = null;
    let PageTitle = {};
    const lastIndex = appConstants.headerMenu.findIndex(val => val.link === this.props.history.location.pathname);
    if (lastIndex > 0) {
      PageTitle = appConstants.headerMenu[lastIndex].titleContent;
    }
    if (this.props.loading) {
      PageAllContent = <Spinner />;
    }
    if (this.props.errorMsg) {
      PageAllContent = <ErrorAction type="SomeThingWrong" action="back" />;
    }

    if (!this.props.loading && this.props.postListResponse) {
      if (!this.state.loadOnce) {
        initialItemsData = this.props.postListResponse.posts;
        this.state.loadOnce = true;
      }
      PageAllContent = (
        <Aux>
          <PostBgrTitle titleContent={this.props.postListResponse} contentType="Blog" />
          <PostList
            row="2"
            article="post"
            display="all"
            postData={this.props.postListResponse}
          />

        </Aux>);
    }


    return (
      <div className={css.homeContainer}>
        {this.state.isLoading}
        <div className="minhight90vh">
          {PageAllContent}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  postListResponse: state.postlist.postlistPageData,
  error: state.postlist.error,
  loading: state.postlist.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchPostListDataReset: () =>
    dispatch(actions.fetchPostListDataReset()),
  onFetchPostListData: (slug, page) =>
    dispatch(actions.fetchPostListData(slug, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PostListing, axios));
