/* HEADER COMPONENT */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import * as appConstants from '../../shared/appConstants';
import css from './Header.css';

let scrolltop = false;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      headerMenuOpen: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toogleHeaderMenu = this.toogleHeaderMenu.bind(this);
  }
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log('on route change');
      // OnRouteChange(location);
      this.state.headerMenuOpen = false;
    });
  }
  componentDidMount() {
    this.state.categoryID = this.props.match.params.id;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }
  componentWillReceiveProps(nextProps) {
    // call your api and update state with new props

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    if (window.scrollY !== 0) {
      scrolltop = true;
      this.setState({
        scrolling: true,
      });
    }
  };
  toogleHeaderMenu() {
    this.setState(prevState => ({
      headerMenuOpen: !prevState.headerMenuOpen
    }));
  }

  render() {
    return (
      <header >
        <div className={classnames({
        [css.header]: true,
        [css.fixedheader]: this.state.scrolling,
      })}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between d-flex">
              <div >
                <a className={css.logo} href="/">GANNY</a>
              </div>
              <nav >
                <div
                  className={classnames({
                    [css.wrapperMenu]: true,
                    [css.wrapperMenuOpen]: this.state.headerMenuOpen,
                  })}
                  onClick={this.toogleHeaderMenu}
                >
                  <div className={`${css.lineMenu} ${css.half} ${css.start} `} />
                  <div className={css.lineMenu} />
                  <div className={`${css.lineMenu} ${css.half} ${css.end} `} />
                </div>
                {appConstants.headerMenu && appConstants.headerMenu.length > 0 ? (
                  <div className={css.navMenu}>
                    <ul>
                      {appConstants.headerMenu.map((menuitem, index) => (
                        <li key={`headerMenu${menuitem.id}`}>
                          <NavLink to={`${process.env.PUBLIC_URL}${menuitem.link}`} >{menuitem.name}                          </NavLink>
                        </li>
        ))}
                    </ul>
                  </div>
    ) : (
      <div className={css.no_items} />
    )}

              </nav>

            </div>
          </div>
        </div>
        <nav
          className={classnames({
          [css.responsiveMenu]: true,
          [css.responsiveMenuActive]: this.state.headerMenuOpen,
        })}
        >

          {appConstants.headerMenu && appConstants.headerMenu.length > 0 ? (
            <div >
              <ul>
                {appConstants.headerMenu.map((menuitem, index) => (
                  <li key={`headerMenu1${menuitem.id}`}>
                    <NavLink to={`${process.env.PUBLIC_URL}${menuitem.link}`} >{menuitem.name}                          </NavLink>
                  </li>
        ))}
              </ul>
            </div>
    ) : (
      <div className={css.no_items} />
    )}

        </nav>
      </header>


    );
  }
}

export default withRouter(Header);
