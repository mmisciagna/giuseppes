/**
 * Use this URL to get the worksheet ID for each menu section.
 * https://spreadsheets.google.com/feeds/worksheets/1vQaT-10PJ4SxRXDZiV0-eCF8yRJ_scCrW74CYh21lD8/private/full
 */
const worksheetIds = [
  ['od6'], // Appetizers
  ['ob9t8ls'], // Soups & Salads
  ['omi5vdu'], // Early Bird
  ['of5sujo'], // House Specialties
  ['o9dletk'], // Seafood
  ['ov5j7ye'], // Pasta
  ['ofnnah0'], // Steaks
  ['o8kumeo'], // Calzones
  ['o319i5o'], // Pizza
  ['ov4l2x1'], // Subs
  ['o6tfc61'], // Lunch
  ['ol93fgr']  // Beverages
];


module.exports = class MenuController {
  /** @ngInject */
  constructor(MenuService, $filter, $routeParams, $rootScope, $window, $location) {
    this.rootScope = $rootScope;
    this.filter = $filter;
    this.routeParams = $routeParams;
    this.window = $window;
    this.location = $location;

    this.rootScope.menus = this.rootScope.menus || [];
    this.rootScope.approvedRouteParams =
        this.rootScope.approvedRouteParams || [];

    this.activeMenu;

    if (this.rootScope.menus.length == 0) {
      this.getMenus(MenuService);
    } else {
      this.activeMenu = this.setActiveMenu();
    }
  }

  getMenus(MenuService) {
    worksheetIds.forEach((id, i) => {
      ((i) => {
        MenuService.getMenus(id).then((data) => {
          data.order = i;
          data.titleSlug = this.filter('slugify')(data.title.$t);
          this.rootScope.approvedRouteParams.push(data.titleSlug);
          this.rootScope.menus.push(data);
          if (this.rootScope.menus.length == worksheetIds.length) {
            this.activeMenu = this.setActiveMenu();
          }
        });
      })(i);
    });
  }

  setActiveMenu() {
    if (this.rootScope.approvedRouteParams.indexOf(this.routeParams.menu) > -1)
    {
      return this.routeParams.menu;
    } else {
      for (let i = 0; i < this.rootScope.menus.length; i++) {
        if (this.rootScope.menus[i].order == 0) {
          this.location.path('/menu');
          return this.rootScope.menus[i].titleSlug;
        }
      }
    }
  }
};
