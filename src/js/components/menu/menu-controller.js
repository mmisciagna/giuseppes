module.exports = class MenuController {
  /** @ngInject */
  constructor(MenuService, $rootScope) {
    if (!MenuService.rootScope.menus.length) {
      MenuService.getMenus();
    } else {
      $rootScope.activeMenu = MenuService.setActiveMenu();
    }
  }
};
