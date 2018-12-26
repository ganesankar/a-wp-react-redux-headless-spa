// Type List container
import React, { Component } from 'react';
import { connect } from 'react-redux';


import logger from '../../shared/logger/logger';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../shared/axiosInstanceWpress';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import css from './TypeList.css';
import ErrorAction from '../../components/UI/ErrorAction/ErrorAction';
import PostBgrTitle from '../../components/Post/BgrTitle/BgrTitle';
import PostList from '../../components/Post/PostList/PostList';
import Pagination from '../../components/Post/Pagination/Pagination';

import * as appConstants from '../../shared/appConstants';


let initialItemsData = [];
class TypeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadOnce: false
    };
  }

  componentDidMount() {
    const { type, slug } = this.props.match.params;
    this.state.slug = slug || '';
    this.state.type = type || '';
    this.props.onFetchPostTypeList(this.state.slug, this.state.type);
  }

  componentWillUnmount() {
    this.props.onFetchPostTypeListReset();
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
          <PostBgrTitle titleContent={this.props.postListResponse} contentType={this.state.type} />
          <PostList postData={this.props.postListResponse} type={this.state.type} article="article" />
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
  postListResponse: state.posttypelist.posttypelistPageData,
  error: state.posttypelist.error,
  loading: state.posttypelist.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchPostTypeListReset: () =>
    dispatch(actions.fetchPostTypeListDataReset()),
  onFetchPostTypeList: (slug, posttype, page) =>
    dispatch(actions.fetchPostTypeListData(slug, posttype, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(TypeList, axios));
