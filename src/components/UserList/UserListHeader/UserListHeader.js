import React from 'react';


import css from './UserListHeader.css';
import FilterSearchbar from './FilterSearchbar/FilterSearchbar';




const userListHeader = (props) => {
  let userMode = null;
  // const userType = cookies.get('userType');
  const userType = window.sessionStorage.getItem('userType');
  if (userType === 'JPJC') {
    userMode = 'SO';
  } else {
    userMode = 'Retailer';
  }
  return (
    <section className={['bg-white', css.boxShadow, css.jumbotron].join(' ')} >
      <div className="container-fluid p-0">
        {userType === 'JPJC' &&
          <div className="mb-3">
            <h4 className={css.userHeader}> Welcome {window.sessionStorage.getItem('userName')}</h4>
            <p className={css.userdes}> {props.userData.length} {userMode}s are assisted by you</p>
          </div>
        }
        <FilterSearchbar
          searchText={props.srchTxt}
          clkClear={props.clkClear}
          filterList={props.filterUsers}
        />
      </div>
    </section>
  );
};

export default userListHeader;
