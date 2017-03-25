module.exports = class MenuService {
  /** @ngInject */
  constructor($http, $routeParams) {
    this.http = $http;
    this.routeParams = $routeParams;
  }

  getMenus(worksheetId) {
    const url = 'https://spreadsheets.google.com/feeds/list/' +
        '1vQaT-10PJ4SxRXDZiV0-eCF8yRJ_scCrW74CYh21lD8' +
        '/' + worksheetId + '/public/values?alt=json';

    return this.http.get(url).then((response) => {
      return response.data.feed;
    }, (error) => {
      return error;
    });
  }
};
