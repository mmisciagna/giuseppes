module.exports = class NavController {
  /** @ngInject */
  constructor(NavService, $rootScope, $window, $location) {
    this.rootScope = $rootScope;
    this.window = $window;
    this.location = $location;

    this.items = NavService.getNavItems();
    this.isActive = false;
  }

  toggleNav(e) {
    if (e.target.classList.contains('js-toggle-nav')) {
      this.isActive = !this.isActive;
      this.rootScope.noScroll = this.isActive;
    }
  }

  setActiveNav(path) {
    const pathSplit = this.location.path().split('/');

    return this.location.path() == `/${path}` ||
        this.location.path() == `/${path}/${pathSplit[2]}`;
  }

  scrollToTop() {
    this.window.scrollTo(0, 0);
  }
};
