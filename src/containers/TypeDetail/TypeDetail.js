// Type Details Container
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import * as actions from '../../store/actions';
import css from './TypeDetail.css';

import axios from '../../shared/axiosInstanceWpress';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import PostTitle from '../../components/Post/Title/Title';
import PostBgrTitle from '../../components/Post/BgrTitle/BgrTitle';
import PostContent from '../../components/Post/Content/Content';
import PostList from '../../components/Post/PostList/PostList';
import * as appConstants from '../../shared/appConstants';


class TypeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statePath: '',
      statePathClass: '',
      showDesc: false,
      showSubContent: false
    };
    this.checkAndLoadContent = this.checkAndLoadContent.bind(this);
  }

  componentDidMount() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    const { slug, type } = this.props.match.params;
    this.state.slug = slug;
    this.props.onFetchPdpData(type, slug);
    this.checkAndLoadContent();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      const { slug, type } = nextProps.match.params;
      this.state.slug = slug;
      this.state.showSubContent = false;
      this.props.onFetchPdpData(type, slug);
      this.checkAndLoadContent();
    }
  }
  componentWillUnmount() {
    this.props.onFetchPostTypeListReset();
  }
  checkAndLoadContent(slug, type) {
    console.log('checkAndLoadContent', this.props.history.location.pathname);
    const showSubContent = this.props.history.location.pathname.includes('page');
    const lastIndex = appConstants.headerMenu.findIndex(val => val.link === this.props.history.location.pathname);
    if ((lastIndex > 0) && appConstants.headerMenu[lastIndex].loadContent && showSubContent) {
      const headerMenuCon = appConstants.headerMenu[lastIndex].loadContent;

      if (headerMenuCon.postType) {
        this.setState({
          statePath: headerMenuCon.postType,
          statePathClass: headerMenuCon.postClass,
          showDesc: headerMenuCon.postClass,
          showSubContent
        });

        console.log('checkAndLoadContent ', headerMenuCon.postType);
        this.props.onFetchPostTypeList('', headerMenuCon.postType);
      }
    }
  }
  render() {
    let pageContent = null;
    let pageTypeContent = null;
    if (this.props.loading) {
      pageContent = <Spinner />;
    }
    if (!this.props.loading && this.props.postDetailPageData) {
      pageContent = (
        <Aux>
          <PostBgrTitle titleContent={this.props.postDetailPageData.post} contentType={this.state.type} />
          <PostContent content={this.props.postDetailPageData.post} />
        </Aux>);
    }
    if (!this.props.loading && this.props.postListResponse && this.state.showSubContent) {
      pageTypeContent = (
        <Aux>
          <PostList row="2" postData={this.props.postListResponse.posts} type={this.state.statePath} cls={this.state.statePathClass} showDesc={this.state.showDesc} />
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
  postDetailPageData: state.postdetail.postDetailPageData,
  postListResponse: state.posttypelist.posttypelistPageData,
  error: state.postdetail.error,
  loading: state.postdetail.loading,
});

const mapDispatchToProps = dispatch => ({
  onFetchPdpData: (type, slug) => dispatch(actions.fetchPostDetail(type, slug)),
  onFetchPostTypeListReset: () =>
    dispatch(actions.fetchPostTypeListDataReset()),
  onFetchPostTypeList: (slug, posttype) =>
    dispatch(actions.fetchPostTypeListData(slug, posttype))
});


const postDetailConnect = withErrorHandler(TypeDetail, axios, 'otpError');

export default connect(mapSateToProps, mapDispatchToProps)(postDetailConnect);
