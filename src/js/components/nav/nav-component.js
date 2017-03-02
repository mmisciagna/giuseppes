module.exports = () => {
  return {
    restrict: 'A',
    replace: true,
    controller: 'NavController as navCtrl',
    templateUrl: '/src/js/components/nav/nav.html'
  }
};
