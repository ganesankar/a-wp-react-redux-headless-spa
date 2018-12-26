/* pOST tITLE Component More Options JSX  */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { returnDateTime } from '../../../shared/utility';
import css from './Title.css';

const Title = props => (
  <section className="jumbotron text-center">
    <div className="container">
      <h1 className="jumbotron-heading" dangerouslySetInnerHTML={{ __html: props.content.title }} />
      <p className="lead text-muted">
        {props.content.author && props.content.author.nickname ? <span > {props.content.author.nickname} </span> : <span className="AuthorInvalid" />}
        {props.content.date ? <span> {returnDateTime(props.content.date, 'date')}</span> : <span className="DateInvalid" />}
        {props.content.categories && props.content.categories.map((entry, index) => (
          <NavLink
            index={index}
            to={`${process.env.PUBLIC_URL}/category/add-money`}
            key={entry.entryNumber}
          > {entry.title}
          </NavLink>
              ))}
      </p>
    </div>
  </section>
);

export default Title;
