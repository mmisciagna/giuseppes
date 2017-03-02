const NavController = require('../nav/nav-controller');
const NavService = require('../nav/nav-service');
const mastheadComponent = require('./masthead-component');

module.exports = angular.module('masthead', [])
    .controller('NavController', NavController)
    .directive('masthead', mastheadComponent)
    .service('NavService', NavService);
