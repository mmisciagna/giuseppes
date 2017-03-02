const NavController = require('../nav/nav-controller');
const NavService = require('../nav/nav-service');
const footerComponent = require('./footer-component');

module.exports = angular.module('footer', [])
    .controller('NavController', NavController)
    .directive('footer', footerComponent)
    .service('NavService', NavService);
