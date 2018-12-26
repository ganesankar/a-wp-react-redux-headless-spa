// Footer Component
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import * as appConstants from '../../shared/appConstants';
import css from './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowFooterTop: false,
      thisYear: new Date().getFullYear(),
    };
  }


  render() {
    return (
      <footer
        className={classnames({
          [css.footerArea]: true,
          [css.pullp2k]: this.state.ShowFooterTop,
        })}
      >

        <div className="container">
          <div className="row">
            <div className="col-lg-3  col-md-12 col-sm-12 pb-5 pl-0 ">
              <div className="single-footer-widget">
                <div className="  ">
                  <NavLink to={`${process.env.PUBLIC_URL}/`} className={css.logofooter}> {appConstants.appTitle}   </NavLink>
                  <p>  {appConstants.appDescription}</p>
                </div>

              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-12 pb-5 ">
              <div className="single-footer-widget">
                <h4 className="">Services</h4>
                {appConstants.footerLinks && appConstants.footerLinks.length > 0 ? (
                  <div className={css.navMenu}>
                    <ul>
                      {appConstants.footerLinks.map((menuitem) => (
                        <li key={`footerLinks${menuitem.id}`} > <NavLink to={`${process.env.PUBLIC_URL}${menuitem.link}`} >{menuitem.name}                 </NavLink> </li>
                          ))}
                    </ul>
                  </div>
                          ) : (
                            <div className={css.no_items} />
                          )}

              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-12 pb-5 hidden-xs">
              <div className="single-footer-widget">
                <h4 className="">Links</h4>
                {appConstants.headerMenu && appConstants.headerMenu.length > 0 ? (
                  <div className={css.navMenu}>
                    <ul>
                      {appConstants.headerMenu.map((menuitem, index) => (
                        <li key={`headerMenu3${menuitem.id}`}>
                          <NavLink to={`${process.env.PUBLIC_URL}${menuitem.link}`} >{menuitem.name}                          </NavLink>
                        </li>
                        ))}
                    </ul>
                  </div>
                    ) : (
                      <div className={css.no_items} />
                    )}
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-12 pb-5">
              <div className="single-footer-widget">
                <h4 className="">Start a Conversation</h4>

                {appConstants.connectionLinks && appConstants.connectionLinks.length > 0 ? (
                  <div className={css.navMenu}>
                    <ul>
                      {appConstants.connectionLinks.map((menuitem, index) => (
                        <li key={`connectionLinks${menuitem.id}`} > <Link to={`${menuitem.link}`} href={menuitem.link} target="_blank" >{menuitem.name}                 </Link> </li>
                          ))}
                    </ul>
                  </div>
                          ) : (
                            <div className={css.no_items} />
                          )}

              </div>
            </div>

          </div>
          <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">

            <p className="footer-text m-0">Copyright &copy;  {this.state.thisYear}  {appConstants.footerCopyRightContent}
            </p>
            {appConstants.socialLinks && appConstants.socialLinks.length > 0 ? (
              <div className="footer-social d-flex align-items-center">

                {appConstants.socialLinks.map((menuitem, index) => (
                  <Link key={`socialLinks${menuitem.id}`} href={menuitem.link} to={menuitem.elink} target="_blank"> <i className={`fa ${menuitem.icon}`} /> </Link>
                ))}

              </div>
              ) : (
                <div className={css.no_items} />
              )}
          </div>
        </div>
      </footer>


    );
  }
}

export default withRouter(Footer);
