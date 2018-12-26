/* POST LISTNIG PAGINATION  jsx */
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Pagination.css';

const createTable = (to, total, current) => {
  const table = [];
  if (total > 1) {
    if (current === 1) {
      table.push(<li className="page-item"><span className="page-link disabled" key={`pagination${to}_previous`} > Previous </span>    </li>);
    } else if (current > 1) {
      table.push(<li className="page-item"><NavLink className="page-link" key={`pagination${to}_previous`} to={`${process.env.PUBLIC_URL}/${to}?page=${current - 1}`} > Previous    </NavLink>    </li>);
    }

    for (let i = 0; i < total;) {
      i += 1;
      // Create the parent and add the children
      table.push(<li className="page-item"><NavLink className="page-link" key={`pagination${to}_${i}`} to={`${process.env.PUBLIC_URL}/${to}?page=${i}`} >{i}      </NavLink>    </li>);
    }

    if (current === total) {
      table.push(<li className="page-item"><span className="page-link disabled" key={`pagination${to}_previous`} > Next </span>    </li>);
    } else if (current < total) {
      table.push(<li className="page-item"><NavLink className="page-link" key={`pagination${to}_previous`} to={`${process.env.PUBLIC_URL}/${to}?page=${current + 1}`} > Next    </NavLink>    </li>);
    }
  }

  return table;
};
const Pagination = (props) => (
  <section>
    <div className="container">
      <div className="row justify-content-sm-center">
        <nav aria-label="Page navigation sm-auto">
          <ul className="pagination">
            {createTable(props.to, props.total, props.current)}
          </ul>
        </nav>
      </div>
    </div>
  </section>
);
export default Pagination;
