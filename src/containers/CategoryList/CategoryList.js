// User List container
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logger from '../../shared/logger/logger';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../shared/axiosInstanceWpress';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import css from './CategoryList.css';
import ErrorAction from '../../components/UI/ErrorAction/ErrorAction';
import PostList from '../../components/Post/PostList/PostList';
import PostBgrTitle from '../../components/Post/BgrTitle/BgrTitle';

let initialItemsData = [];
class CategoryList extends Component {
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
    let BlogPageTitle = 'Blog';

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
      if (this.state.slug !== 'journal') {
        BlogPageTitle = this.state.slug;
      }
      PageAllContent = (
        <Aux>
          <PostBgrTitle titleContent={this.props.postListResponse} contentType={BlogPageTitle} />
          <PostList
            row="2"
            article="article"
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(CategoryList, axios));
