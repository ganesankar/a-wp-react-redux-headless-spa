// App Container
import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';
import { OnRouteValidate } from './shared/utility';
import appLogo from './assets/appLogo.svg';
import './App.css';


const asyncHomePage = asyncComponent(() => import('./containers/HomePage/HomePage'));
const asyncPostListing = asyncComponent(() => import('./containers/PostListing/PostListing'));
const asyncCategoryList = asyncComponent(() => import('./containers/CategoryList/CategoryList'));
const asyncTypeList = asyncComponent(() => import('./containers/TypeList/TypeList'));
const asyncPostDetails = asyncComponent(() => import('./containers/PostDetails/PostDetails'));
const asyncPageDetails = asyncComponent(() => import('./containers/PageDetail/PageDetail'));
const asyncTypeDetail = asyncComponent(() => import('./containers/TypeDetail/TypeDetail'));
const asyncDashBoard = asyncComponent(() => import('./components/ComingSoon/ComingSoon'));

class App extends Component {
  constructor(props) {
    super(props);


    // updating the state
    this.state = {
      splashLoaded: false
    };
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });
    if (sessionStorage.getItem('splashLoaded')) {
      this.setState({ splashLoaded: true });
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ splashLoaded: true });
      sessionStorage.setItem('splashLoaded', 'true');
    }, 4000);
  }
  componentWillUnmount() {
    this.unlisten();
  }


  render() {
    const routes = (
      <Switch basename={process.env.PUBLIC_URL}>

        <Route path={`${process.env.PUBLIC_URL}/:slug`} exact component={asyncPageDetails} />
        <Route path={`${process.env.PUBLIC_URL}/post/:slug`} exact component={asyncPostDetails} />
        <Route path={`${process.env.PUBLIC_URL}/article/:type/:slug`} exact component={asyncTypeDetail} />
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={asyncHomePage} />
        <Route path={`${process.env.PUBLIC_URL}/allposts` || `${process.env.PUBLIC_URL}/allposts/page/:page`} exact component={asyncPostListing} />
        <Route path={`${process.env.PUBLIC_URL}/category/:slug` || `${process.env.PUBLIC_URL}/category/:slug/page/:page`} exact component={asyncCategoryList} />
        <Route path={`${process.env.PUBLIC_URL}/list/:type` || `${process.env.PUBLIC_URL}/list/:type/page/:page`} exact component={asyncTypeList} />

        <Redirect to={`${process.env.PUBLIC_URL}/`} />

      </Switch>
    );
    if (!this.state.splashLoaded) {
      const loader = (
        <div className="splashScreen">
          <div className="logoAnimation">
            <img src={appLogo} alt="Ganesan KAruppaiya" />
          </div>
        </div>
      );
      return loader;
    }
    return (
      <div >
        <Layout >
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = () => ({
  error: null,
  loading: false
});

export default withRouter(connect(mapStateToProps)(App));
