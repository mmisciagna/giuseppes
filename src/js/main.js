const mainController = require('./main-controller');
const slugifyFilter = require('./filters/slugify');

const main = angular.module('main', [
  require('./components/masthead/masthead').name,
  require('./components/nav/nav').name
])
    .controller('MainCtrl', mainController)
    .filter('slugify', slugifyFilter);
