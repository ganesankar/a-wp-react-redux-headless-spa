/* POST PR PAGE CONTENT Component JSX  */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import css from './Content.css';

const Content = props => (
  <section>
    <div className="container-fluid">
      <div className="row">

        <div className="col-sm-12 co-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div dangerouslySetInnerHTML={{ __html: props.content.content }} />
        </div>

      </div>
    </div>
    <div className="container" />
  </section>
);

export default Content;
