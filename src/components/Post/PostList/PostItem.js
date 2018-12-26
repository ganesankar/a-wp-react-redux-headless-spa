/* POST LISTING ITEM COMPONENT JSX */
import React from 'react';
import { Link } from 'react-router-dom';
import css from './PostList.css';
import { returnDateTime, PageTitleBgr } from '../../../shared/utility';

const PostItem = (props) =>
  (
    <Link
      className={`${props.row} amp p-0 propsr${props.row}`}
      key={`${props.postitem.code}${props.type}`}
      id={`blogpost${props.postitem.id}`}
      to={`${process.env.PUBLIC_URL}/article/${props.type}/${props.postitem.slug}`}
      href={`${process.env.PUBLIC_URL}/article/${props.type}/${props.postitem.slug}`}
    >

      <div className={`${css.cardStyle} ${css.cardStyle1}`}>
        <div className={css.wrapper} style={{ backgroundImage: `url(${PageTitleBgr(props.postitem)})` }}>
          <div className={css.wrapperContainer}>
            {props.postitem.date &&
            <div className={css.header}>
              <div className={css.date}>
                {props.postitem.date && <span className={css.day}> {returnDateTime(props.postitem.date, 'date')}</span> }


              </div>
            </div> }

            <div className={css.data}>
              <div className={css.content}>
                <span className={css.author}> {props.postitem.author.nickname}</span>
                <h1 className={css.title} dangerouslySetInnerHTML={{ __html: props.postitem.title }} />
                <div className={css.text} dangerouslySetInnerHTML={{ __html: props.postitem.excerpt }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
export default PostItem;
