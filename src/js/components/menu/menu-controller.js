module.exports = class MenuController {
  /** @ngInject */
  constructor(MenuService) {
    this.items = MenuService.getMenuItems();
  }
};
