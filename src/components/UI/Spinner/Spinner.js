import React from 'react';
import classes from './Spinner.css';

const spinner = () => <div className={classes.preloader}><div className={classes.loader}>.</div></div>;

export default spinner;
