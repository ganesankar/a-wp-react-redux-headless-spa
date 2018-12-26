/* POST OR PAGE TITLE COMPONENT */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { returnDateTime, PageTitleBgr } from '../../../shared/utility';
import css from './BgrTitle.css';


const BgrTitle = props => (
  <section >
    <div style={{ backgroundImage: `url(${PageTitleBgr(props.contentType)})` }} className={css.bgrTitleContainer} >
      <div className={css.bgrTitleContent}>
        <div className="container">

          {props.titleContent.title ?
            <h1 className="jumbotron-heading" dangerouslySetInnerHTML={{ __html: props.titleContent.title }} /> :
            <h1 className="jumbotron-heading" dangerouslySetInnerHTML={{ __html: props.contentType }} />
          }


          <p className="lead text-muted">
            {props.titleContent.author && props.titleContent.author.nickname ? <span > {props.titleContent.author.nickname} </span> : <span className="AuthorInvalid" />}
            {props.titleContent.date ? <span> {returnDateTime(props.titleContent.date, 'date')}</span> : <span className="DateInvalid" />}
            {props.titleContent.categories && props.titleContent.categories.map((entry, index) => (
              <NavLink
                index={index}
                to={`${process.env.PUBLIC_URL}/category/${entry.slug}`}
                key={entry.entryNumber}
              > {entry.title}
              </NavLink>
              ))}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BgrTitle;
