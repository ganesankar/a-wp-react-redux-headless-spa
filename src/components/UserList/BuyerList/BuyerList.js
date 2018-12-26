import React from 'react';
import { Link } from 'react-router-dom';
import css from './BuyerList.css';

const buyerList = (props) =>
  // const userType = cookies.get('userType');

  (
    <div className={['p-2', css.album].join(' ')}>

      {props.userData && props.userData.length > 0 ? (
        <div>
          {props.userData.map((postitem, index) => (
            <Link
              className={css.linkProd}
              key={postitem.code}
              id={`blogpost${postitem.id}`}
              to={`${process.env.PUBLIC_URL}/post/${postitem.slug}`}
              href={`${process.env.PUBLIC_URL}/post/${postitem.slug}`}
            >
              <div> {postitem.title} </div>
            </Link>
        ))}
        </div>
    ) : (
      <div className={css.no_items}>No items are available</div>
    )}

    </div>
  );
export default buyerList;
