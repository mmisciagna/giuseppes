module.exports = class NavService {
  constructor() {
    this.navItems_ = [
      'Home',
      'About',
      'Catering',
      'Banquets',
      'Menu',
      'Contact'
    ];
  }

  getNavItems() {
    return this.navItems_;
  }
};
