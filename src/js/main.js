const routing = require('./routing');
const slugifyFilter = require('./filters/slugify');

const main = angular.module('main', [
  'ngRoute',
  require('./components/footer/footer').name,
  require('./components/masthead/masthead').name,
  require('./components/menu/menu').name,
  require('./components/nav/nav').name
])
    .config(routing)
    .filter('slugify', slugifyFilter);
