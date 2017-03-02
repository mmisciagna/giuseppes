module.exports = class MainCtrl {
  constructor() {
    this.isTouchDevice = 'ontouchstart' in document.documentElement;
  }
};
