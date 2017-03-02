const NavController = require('./nav-controller');
const NavService = require('./nav-service');
const navComponent = require('./nav-component');

module.exports = angular.module('nav', [])
    .controller('NavController', NavController)
    .directive('mobileNav', navComponent)
    .service('NavService', NavService);
