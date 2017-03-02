const mainController = require('./main-controller');
const routing = require('./routing');
const slugifyFilter = require('./filters/slugify');

const main = angular.module('main', [
  'ngRoute',
  require('./components/masthead/masthead').name,
  require('./components/nav/nav').name
])
    .config(routing)
    .controller('MainCtrl', mainController)
    .filter('slugify', slugifyFilter);
