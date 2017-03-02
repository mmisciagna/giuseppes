module.exports = class Nav {
  constructor(root) {
    this.navEl_ = root;
    this.toggleBtns_ = document.getElementsByClassName('js-toggle-nav');
    this.overlay_ = document.getElementsByClassName('overlay')[0];
    this.registerNavEvents();
  }

  toggleNav(e) {
    e.preventDefault();
    this.navEl_.classList.toggle('nav--isActive');
    this.overlay_.classList.toggle('overlay--isActive');
    document.body.classList.toggle('disable-scrolling');
  }

  windowResize() {
    console.log('resizing');
    if (this.navEl_.classList.contains('nav--isActive') {
      this.navEl_.classList.remove('nav--isActive');
      this.overlay_.classList.remove('overlay--isActive');
      document.body.classList.remove('disable-scrolling');
    }
  }

  registerNavEvents() {
    for (let i = 0; i < this.toggleBtns_.length; i++) {
      this.toggleBtns_[i].addEventListener('click', this.toggleNav.bind(this));
    }

    window.addEventListener('resize', this.windowResize.bind(this));
  }
};
