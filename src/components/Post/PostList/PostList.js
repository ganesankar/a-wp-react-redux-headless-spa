import React from 'react';
import { Link } from 'react-router-dom';
import css from './PostList.css';
import { returnDateTime, PageTitleBgr } from '../../../shared/utility';
import * as appConstants from '../../../shared/appConstants';
import Pagination from '../../../components/Post/Pagination/Pagination';
import PostItem from './PostItem';

const bgrimg = '';
const returnLoopClass = (count) => {
  if ((count === '3') || (count === 3)) {
    return 'col-md-4 col-sm-12 col-xs-12';
  }
  return 'col-md-6 col-sm-12 col-xs-12';
};
const returnContainerClass = (count) => {
  if ((count === '3') || (count === 3)) {
    return 'col-sm-12';
  }
  return 'col-sm-12 co-md-10 offset-md-1 col-lg-8 offset-lg-2';
};

const postListItem = (postData, postCount, postRow, postArtcle, postType) => {
  let returnClass = '';
  if ((postRow === '3') || (postRow === 3)) {
    returnClass = 'col-md-4 col-sm-12 col-xs-12';
  } else {
    returnClass = 'col-md-6 col-sm-12 col-xs-12';
  }
  if (postCount === postData.length) {
    const pitem = postData.map((item) => <PostItem key={item.id} postitem={item} row={returnClass} article={postArtcle} type={postType} />);
    return pitem;
  }
  const pitem = postData.slice(0, postCount).map((item) => <PostItem key={item.id} postitem={item} row={returnClass} article={postArtcle} type={postType} />);
  return pitem;
};
const PostList = (props) =>
  (
    <section>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className={returnContainerClass(props.row)}>
            <div className="">
              {props.postData.posts && props.postData.posts.length > 0 ? (
                <div className="container-fluid">

                  {props.limit ? (
                    <div className="row propslimit">{postListItem(props.postData.posts, props.limit, props.row, props.article, props.type)} </div>
                    ) : (
                      <div className="row propsnolimit">{postListItem(props.postData.posts, props.postData.posts.length, props.row, props.article, props.type)} </div>
                    )}
                </div>
    ) : (
      <div className={css.no_items} />
    )}
            </div>
          </div>

        </div>
      </div>
      {props.limit ? (
        <div className="row nopagination" />
                    ) : (
                      <Pagination current={props.postData.querypage || 1} total={props.postData.pages} to={props.contentType} />
                    )}

    </section>
  );
export default PostList;
