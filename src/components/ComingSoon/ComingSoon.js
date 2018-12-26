// Coming Soon Component
import React from 'react';
import 'classnames';
import { NavLink } from 'react-router-dom';
import css from './ComingSoon.css';

const ComingSoon = () => (
  <div className={css.FlexPage}>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <img alt="img-responsive" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNENEQyRDM7IiBkPSJNNjYuODIzLDQxLjgwN2gtMjguMTljLTguMTMzLDAtMTQuNzI1LDYuNTkzLTE0LjcyNSwxNC43MjV2NDAxLjcxMWMwLDYuNiw1LjM1MSwxMS45NSwxMS45NSwxMS45NSAgIGgzMy43NGM2LjYsMCwxMS45NS01LjM1MSwxMS45NS0xMS45NVY1Ni41MzJDODEuNTQ4LDQ4LjM5OSw3NC45NTUsNDEuODA3LDY2LjgyMyw0MS44MDd6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRDREMkQzOyIgZD0iTTQ0NS4xNzcsNDEuODA3aDI4LjE5YzguMTMzLDAsMTQuNzI1LDYuNTkzLDE0LjcyNSwxNC43MjV2NDAxLjcxMWMwLDYuNi01LjM1MSwxMS45NS0xMS45NSwxMS45NSAgIGgtMzMuNzRjLTYuNiwwLTExLjk1LTUuMzUxLTExLjk1LTExLjk1VjU2LjUzMkM0MzAuNDUyLDQ4LjM5OSw0MzcuMDQ1LDQxLjgwNyw0NDUuMTc3LDQxLjgwN3oiLz4KPC9nPgo8Zz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM0NjUwNTk7IiBwb2ludHM9Ijc0LjQyNSw3OC45NjcgMjUuODA2LDEwMS4zMzQgMCwxNTMuMzk0IDAsMjMzLjcwMyAxMDEuNTA2LDE3MS4zNTUgMTU0LjczNSw3OC45NjcgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzQ2NTA1OTsiIHBvaW50cz0iMjI4Ljc0OSw3OC45NjcgMTAxLjUwNiwxNzEuMzU1IDQzLjk3NCwyNjMuNzQyIDEyNC4yODQsMjYzLjc0MiAyNDAuNTE2LDE4OC43MzEgICAgMzA5LjA1OCw3OC45NjcgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzQ2NTA1OTsiIHBvaW50cz0iMzgzLjA3MSw3OC45NjcgMjQwLjUxNiwxODguNzMxIDE5OC4yOTYsMjYzLjc0MiAyNzguNjA2LDI2My43NDIgMzk1LjMwMywxODQuNjcxICAgIDQ2My4zODEsNzguOTY3ICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM0NjUwNTk7IiBwb2ludHM9IjM4My4wNzEsMjAxLjExOCAzNTIuNjIsMjYzLjc0MiA0MzIuOTI5LDI2My43NDIgNDkwLjMyMywyMzMuNzAzIDUxMiwxODQuNjcxIDUxMiwxMDQuMzYxICAgICAiLz4KPC9nPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkNEMzg7IiBkPSJNNTEyLDE4NC42NzF2NTUuMTY0YzAsMTMuMjAzLTEwLjcwNSwyMy45MDctMjMuOTA3LDIzLjkwN2gtNTUuMTY0TDUxMiwxODQuNjcxeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0QzODsiIGQ9Ik01MTIsMTAyLjg3NXYxLjQ4N2wtMTU5LjM4LDE1OS4zOGgtNzQuMDEzTDQ2My4zODEsNzguOTY3aDI0LjcxMiAgIEM1MDEuMjk1LDc4Ljk2Nyw1MTIsODkuNjcyLDUxMiwxMDIuODc1eiIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGQ0QzODsiIHBvaW50cz0iMzgzLjA3MSw3OC45NjcgMTk4LjI5NiwyNjMuNzQyIDEyNC4yODQsMjYzLjc0MiAzMDkuMDU4LDc4Ljk2NyAgIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZDRDM4OyIgZD0iTTIyOC43NDksNzguOTY3TDQzLjk3NCwyNjMuNzQySDIzLjkwN0MxMC43MDUsMjYzLjc0MiwwLDI1My4wMzcsMCwyMzkuODM0di02LjEzMkwxNTQuNzM1LDc4Ljk2NyAgIEgyMjguNzQ5eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0QzODsiIGQ9Ik03NC40MjUsNzguOTY3TDAsMTUzLjM5NHYtNTAuNTE5YzAtMTMuMjAzLDEwLjcwNS0yMy45MDcsMjMuOTA3LTIzLjkwN0g3NC40MjV6Ii8+CjwvZz4KPGc+Cgk8cmVjdCB4PSIyMy45MTEiIHk9IjI2My43MzciIHN0eWxlPSJmaWxsOiNCQUI4Qjk7IiB3aWR0aD0iNTcuNjQyIiBoZWlnaHQ9IjMxLjEwMSIvPgoJPHJlY3QgeD0iNDMwLjQ1MSIgeT0iMjYzLjczNyIgc3R5bGU9ImZpbGw6I0JBQjhCOTsiIHdpZHRoPSI1Ny42NDIiIGhlaWdodD0iMzEuMTAxIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
        <div className="mt-2">
          <h3> Coming Soon </h3>
          <p >            We are working hard to build search for you :)          </p>
          <NavLink to={`${process.env.PUBLIC_URL}/`}className="btn btn-primary btn-lg mt-3 mb-3">
            Go to home
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default ComingSoon;
