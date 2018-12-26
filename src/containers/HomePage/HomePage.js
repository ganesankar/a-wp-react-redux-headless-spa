// User List container
import React, { Component } from 'react';
import { connect } from 'react-redux';


import logger from '../../shared/logger/logger';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../shared/axiosInstanceWpress';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import css from './HomePage.css';
import ErrorAction from '../../components/UI/ErrorAction/ErrorAction';
import BuyerList from '../../components/UserList/BuyerList/BuyerList';

import PostList from '../../components/Post/PostList/PostList';

import serviceImage from './../../assets/info-img.jpg';
import * as appConstants from '../../shared/appConstants';


let initialItemsData = [];
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadOnce: false
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.state.slug = slug || '';
    this.props.onFetchPostListData(this.state.slug);
    this.props.onFetchPostTypeList('', 'portfolio', 1);
  }

  componentWillUnmount() {
    this.props.onFetchPostListDataReset();
    this.props.onFetchPostTypeListReset();
  }


  render() {
    let PageAllContent = null;
    let PortfolioContent = null;
    if (this.props.loading) {
      PageAllContent = <Spinner />;
    }
    if (this.props.errorMsg) {
      PageAllContent = <ErrorAction type="SomeThingWrong" action="back" />;
    }
    if (!this.props.loading && this.props.portfolioListResponse) {
      PortfolioContent = (
        <Aux>
          <PostList
            row="3"
            article="article"
            postData={this.props.portfolioListResponse}
            type="portfolio"
            cls=""
            showDesc="true"
            limit="3"
          />
        </Aux>
      );
    }
    if (!this.props.loading && this.props.postListResponse) {
      if (!this.state.loadOnce) {
        initialItemsData = this.props.postListResponse;// .posts.slice(0, 3)
        this.state.loadOnce = true;
      }
      PageAllContent = (
        <Aux>
          <section className={`relative ${css.bannerArea} ${css.mh100}`}>
            <div className="container">
              <div className={`row fullscreen d-flex align-items-center justify-content-start  ${css.mh100}`}>
                <div className="banner-content col-lg-7 col-md-12">
                  <h1 className="text-uppercase text-blue"> SO MUCH MORE THAN PIXELS</h1>
                  <h3 className="text-orange text-b400">m Ganesan and i design digital platforms that elevate the user experience
                  </h3>
                  <div>
                    <p>the graphics and web designer by nature. self taught programmer playing with user experience.creator of clean and sharp interfaces and innovator focusing business, users and success</p>
                  </div>
                  <a href="as" className="primary-btn header-btn text-uppercase">EXPLORE MORE</a>
                </div>
              </div>
            </div>
          </section>
          <section className={`relative pb-5 ${css.infoArea} ${css.mh100}`}>
            <div className="container-fluid">
              <div className="row d-flex justify-content-end align-items-center">
                <div className="col-lg-6 col-md-12 info-left no-padding pr-5">
                  <img src={serviceImage} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-12 info-right no-padding">
                  <div>
                    <p>A creative UX and UI designer with great business and design background who loves clean and sharp interfaces. with extreme passion and believe that great graphics in combination with a great user experience can make nearly every app or website a huge success;</p>
                    <p>I specialise in product development, interactive design, graphic design, and business development. In ultimate i see output of my work, which is always focused at the point where user, business and technical requirements meet and tends to become a perfect product.</p>
                  </div>
                  <a href="as" className="primary-btn mt-20 text-uppercase"> MY SERVICES      <span className="lnr lnr-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section

            className={`relative pb-5 ${css.serviceArea} ${css.mh100}`}
            style={{ backgroundImage: `url(${appConstants.CommonBackgroundImage})` }}
          >

            <div className={`overlay pb-5 ${css.overlayBg} ${css.mh100}`} />
            <div className="container">
              <div className="row d-flex justify-content-left text-left">
                <div className="col-sm-1">
                  <hr className="dash" />
                </div>
                <div className="col-sm-8 pb-40 header-text text-left text-white">
                  <h6 className="mb-2  text-white">WHAT I DO</h6>
                  <h3 className="mb-2  text-white">Building Brands, Designing Interface and User Experience and more</h3>
                </div>
              </div>
              <div className="row pt-5 pb-3">
                {appConstants.ServiceThings.map((menuitem, index) => (
                  <div className="col-lg-4 col-md-6" key={`connectionLinks${menuitem.id}`} >
                    <div className={`${css.singleService} `}>
                      <h4> {menuitem.name}</h4>
                      <p>{menuitem.values}</p>
                    </div>
                  </div>
                          ))}
                <div className="col-lg-4 col-md-6" />

              </div>
            </div>
          </section>
          <section
            className={`relative pb-5 ${css.portfolioArea} ${css.mh100}`}
          >
            <div className="container">
              <div className="row d-flex justify-content-left text-left">
                <div className="col-sm-1">
                  <hr className="dash" />
                </div>
                <div className="col-sm-8 pb-40 header-text text-left">
                  <h6 className="mb-2  ">WHAT I DO</h6>
                  <h3 className="mb-2  ">Building Brands, Designing Interface and User Experience and more</h3>
                </div>
              </div>
              {PortfolioContent}
            </div>
          </section>
          <section
            className={`relative pb-5 ${css.portfolioArea} ${css.mh100}`}
          >
            <div className="container">
              <div className="row d-flex justify-content-left text-left">
                <div className="col-sm-1">
                  <hr className="dash" />
                </div>
                <div className="col-sm-8 pb-40 header-text text-left ">
                  <h6 className="mb-2  ">BLOG</h6>
                  <h3 className="mb-2  ">Building Brands, Designing Interface and User Experience and more</h3>
                </div>
              </div>
              <PostList
                postData={initialItemsData}
                row="3"
                type="post"
                article="post"
                limit="3"
              />
            </div>
          </section>

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
  portfolioListResponse: state.posttypelist.posttypelistPageData,
  error: state.postlist.error,
  loading: state.postlist.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchPostListDataReset: () =>
    dispatch(actions.fetchPostListDataReset()),
  onFetchPostListData: slug =>
    dispatch(actions.fetchPostListData(slug)),
  onFetchPostTypeListReset: () =>
    dispatch(actions.fetchPostTypeListDataReset()),
  onFetchPostTypeList: (slug, posttype, page) =>
    dispatch(actions.fetchPostTypeListData(slug, posttype, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(HomePage, axios));
