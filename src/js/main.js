const Nav = require('./nav');

const isTouchDevice = 'ontouchstart' in document.documentElement;
if (!isTouchDevice) {
  document.documentElement.classList.add('no-touch');
}

const nav = document.getElementsByClassName('nav')[0];
new Nav(nav);
