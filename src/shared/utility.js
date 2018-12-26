
import logger from '../shared/logger/logger';
import * as appConstants from './appConstants';

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties
});

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};


export const OnRouteValidate = locationIs => {
  const locationPath = window.location.pathname;
  logger.info('OnRouteChange locationPath  ', locationPath);
  if (locationPath.includes('login')) {
    // logger.info('OnRouteChange locationPath true change');
  } else {
    // logger.info('OnRouteChange locationPath false change');
    const userName = window.sessionStorage.getItem('userName');
    if (!userName) {
      window.location = `${process.env.PUBLIC_URL}/login`;
    }
  }
};

export const returnDateTime = (num, rules) => {
  let finalValue = num || '';
  if (num) {
    if (rules === 'date') {
      const d = new Date(num);
      const date = (`0${d.getDate()}`).slice(-2);
      const year = d.getFullYear();
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      finalValue = `${date}/${month}/${year}`;
    } else if (rules === 'ddmm') {
      const d = new Date(num);
      const date = (`0${d.getDate()}`).slice(-2);
      const year = d.getFullYear();
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      finalValue = `${date}/${month}`;
    } else if (rules === 'time12') {
      const d = new Date(num);
      const H = d.getHours();
      const h = (H % 12) || 12;
      let min = d.getMinutes();
      if (d.getMinutes() < 10) {
        min = `0${min}`;
      }
      const ampm = H < 12 ? 'AM' : 'PM';
      finalValue = `${h}:${min} ${ampm}`;
    } else if (rules === 'time24') {
      const d = new Date(num);
      let min = d.getMinutes();
      if (d.getMinutes() < 10) {
        min = `0${min}`;
      }
      finalValue = `${d.getHours()}:${min}`;
    }
  }
  return finalValue;
};

export const PageTitleBgr = (img) => {
  let bgrimg = appConstants.CommonBackgroundImage;
  try {
    if (img.thumbnail_images) {
      if (img.thumbnail_images.full && img.thumbnail_images.full.url) {
        bgrimg = img.thumbnail_images.full.url;
      }
    }
  } catch (err) {
    console.log(err);
  }
  return bgrimg;
};
