const MenuController = require('./menu-controller');
const MenuService = require('./menu-service');

module.exports = angular.module('menu', [])
    .controller('MenuCtrl', MenuController)
    .service('MenuService', MenuService);
