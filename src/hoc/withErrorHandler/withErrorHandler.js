import React, { Component } from 'react';

import logger from '../../shared/logger/logger';
import ErrorAction from '../../components/UI/ErrorAction/ErrorAction';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios, errorExp) =>
  class extends Component {
    state = {
      error: null,
      errorContent: null,
      errorStatus: null
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          logger.debug('state error error', error.response);
          this.setState({ error });
          this.setState({ errorStatus: error.response.status });
          this.setState({ errorContent: error.response });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    errorHandler = () => {
      let errComp = null;
      switch (this.state.errorStatus) {
        case 404: {
          errComp = <ErrorAction type="404" action="home" />;
          break;
        }
        case 500: {
          errComp = <ErrorAction type="NoInternet" action="refresh" />;
          break;
        }
        default:
          errComp = <ErrorAction type="SomeThingWrong" action="refresh" />;
      }
      return errComp;
    };

    render() {
      let errorPageContent = null;

      /* logger.debug('state errorStatus', this.state.errorStatus);
      logger.debug('state errorContent', this.state.errorContent);
      logger.debug('state error', this.state.error);
      */


      if (this.state.error) {
        errorPageContent = this.errorHandler();
      } else {
        errorPageContent = (
          <WrappedComponent {...this.props} errorMsg={this.state.error} />
        );
      }

      return (
        <Aux>
          {errorPageContent}
        </Aux>
      );
    }
  };

export default withErrorHandler;
