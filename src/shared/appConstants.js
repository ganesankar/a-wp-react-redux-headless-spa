
import appCmnBgr from './../assets/bgr001.jpg';

export const appTitle = 'GANNY';
export const appDescription = '';
export const appAbout = '';
export const appLogo = '';
export const footerCopyRightContent = 'All rights reserved | Ganesan Karuppaiya';
export const CommonBackgroundImage = appCmnBgr;

export const headerMenu = [
  {
    id: 1,
    name: 'home',
    link: '/',
    loadContent: {}
  },
  {
    id: 2,
    name: 'about',
    link: '/about',
    loadContent: {}
  }, {
    id: 3,
    name: 'what i do',
    link: '/services',
    loadContent: { postType: 'service', postClass: 'col-md-6 col-sm-12 col-xs-12', showDesc: true }
  }, {
    id: 4,
    name: 'my works',
    link: '/my-works',
    loadContent: { postType: 'portfolio', postClass: 'col-md-6 col-sm-12 col-xs-12', showDesc: false }
  }, {
    id: 5,
    name: 'blog',
    link: '/journal',
    titleContent: { title: 'post', thumbnail_images: { url: '' } },
    loadContent: { postType: 'post', postClass: 'col-md-6 col-sm-12 col-xs-12', showDesc: true }
  }, {
    id: 6,
    name: 'contact',
    link: '/contact',
    loadContent: {}
  }

];

export const footerLinks = [
  {
    id: 1,
    name: 'Graphic Design and branding',
    link: '/page/service',
    loadContent: {}
  },
  {
    id: 2,
    name: 'User Interface Designing',
    link: '/service',
    loadContent: {}
  }, {
    id: 3,
    name: 'User Experience Products',
    link: '/service',
    loadContent: { postType: 'service' }
  }
];
export const connectionLinks = [
  {
    id: 1,
    name: 'hello@ganny.in',
    link: 'mailto:hello@ganny.in',
  },
  {
    id: 2,
    name: '+91 994 373 2416',
    link: 'tel:+919943732416',
  }
];
export const socialLinks = [
  {
    name: 'google',
    id: 1,
    title: 'Google+',
    icon: 'fa-google-plus',
    elink: 'https://plus.google.com/+GanesanKaruppaiya',
  },
  {
    name: 'github',
    id: 2,
    title: 'Github',
    icon: 'fa-github',
    elink: 'https://github.com/ganesankar',
  },
  {
    name: 'linkedIn',
    id: 3,
    title: 'LinkedIn',
    icon: 'fa-linkedin',
    elink: 'https://in.linkedin.com/in/ganesankar',
  },
  {
    name: 'instagram',
    id: 4,
    title: 'Instagram',
    icon: 'fa-instagram',
    elink: 'https://www.instagram.com/ganesankar/',
  },
  {
    name: 'twitter',
    id: 5,
    title: 'Twitter',
    icon: 'fa-twitter',
    elink: 'http://twitter.com/ganesankar',
  },
  {
    name: 'facebook',
    id: 6,
    title: 'Facebook',
    icon: 'fa-facebook',
    elink: 'http://facebook.com/ganesankars',
  },
  {
    name: 'medium',
    id: 7,
    title: 'Medium',
    icon: 'fa-medium',
    elink: 'https://medium.com/@ganesankar/',
  },
  {
    name: 'pinterest',
    id: 8,
    title: 'Pinterest',
    icon: 'fa-pinterest',
    elink: 'https://www.pinterest.com/ganesankar/',
  },
  {
    name: 'skype',
    id: 9,
    title: 'Skype',
    icon: 'fa-skype',
    elink: 'skype:ganesan.intech',
  }
];
export const ServiceThings = [{
  id: '01',
  name: 'VISUALISING IDEAS',
  img: 'http://ganny.in/wp-content/uploads/2016/12/logo-degning-vectr-banner.jpg',
  values: 'Every great design starts with an simple idea and best way to present an idea is to visualise it. It makes your idea alive. In many cases, visualisation helps to understand the story of the business idea.'
},
{
  id: '02',
  name: 'INNOVATIVE INTERFACES',
  img: 'http://ganny.in/wp-content/uploads/2016/12/websites-degning-banner.jpg',
  values: 'It�s very important that all the fundamental parts are well defined and working This is where problem solving meets visual impact. I�ll unite products and users, design and experiences.'
},
{
  id: '03',
  name: 'BUILDING PRODUCTS',
  img: 'http://ganny.in/wp-content/uploads/2016/12/custome-webdevelopments-banner.jpg',
  values: 'It doesn�t stop with design. I can develop your product from visual concept to fully functional website with defined standards.'
}

];

