/**
 * Use this URL to get the worksheet ID for each menu section.
 * https://spreadsheets.google.com/feeds/worksheets/1vQaT-10PJ4SxRXDZiV0-eCF8yRJ_scCrW74CYh21lD8/private/full
 */
const worksheetIds = [
  'od6', // Appetizers
  'ob9t8ls', // Soups & Salads
  'omi5vdu', // Early Bird
  'of5sujo', // House Specialties
  'o9dletk', // Seafood
  'ov5j7ye', // Pasta
  'ofnnah0', // Steaks
  'o8kumeo', // Calzones
  'o319i5o', // Pizza
  'ov4l2x1', // Subs
  'o6tfc61', // Lunch
  'ol93fgr'  // Beverages
];


module.exports = class MenuService {
  /** @ngInject */
  constructor($http, $filter, $routeParams, $rootScope, $location) {
    this.http = $http;
    this.filter = $filter;
    this.rootScope = $rootScope;
    this.routeParams = $routeParams;
    this.location = $location;

    this.rootScope.menus = this.rootScope.menus || [];
    this.rootScope.approvedRouteParams =
        this.rootScope.approvedRouteParams || [];
    this.rootScope.activeMenu;
  }

  requestMenus(worksheetId) {
    const url = 'https://spreadsheets.google.com/feeds/list/' +
        '1vQaT-10PJ4SxRXDZiV0-eCF8yRJ_scCrW74CYh21lD8' +
        '/' + worksheetId + '/public/values?alt=json';

    return this.http.get(url).then((response) => {
      return response.data.feed;
    }, (error) => {
      return error;
    });
  }

  getMenus() {
    worksheetIds.forEach((id, i) => {
      ((i) => {
        this.requestMenus(id).then((data) => {
          data.order = i;
          data.titleSlug = this.filter('slugify')(data.title.$t);
          this.rootScope.approvedRouteParams.push(data.titleSlug);
          this.rootScope.menus.push(data);
          if (this.rootScope.menus.length == worksheetIds.length) {
            this.rootScope.activeMenu = this.setActiveMenu();
          }
        });
      })(i);
    });
  }

  setActiveMenu() {
    if (this.rootScope.approvedRouteParams.indexOf(
        this.routeParams.menu) > -1) {
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
