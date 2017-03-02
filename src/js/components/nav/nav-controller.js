module.exports = class NavController {
  /** @ngInject */
  constructor(NavService, $rootScope) {
    this.items = NavService.getNavItems();
    this.isActive = false;
    this.rootScope_ = $rootScope;
  }

  toggleNav(e) {
    if (e.target.classList.contains('js-toggle-nav')) {
      this.isActive = !this.isActive;
      this.rootScope_.disableScrolling = this.isActive;
    }
  }

  setActiveNav(path) {
    return window.location.hash == `#/${path}`;
  }
};
