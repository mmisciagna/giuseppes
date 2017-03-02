/** @ngInject */
module.exports = ($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
   redirectTo: '/home'
  }).when('/home', {
   templateUrl: '/views/home.html'
  }).when('/about', {
   templateUrl: '/views/about.html'
  }).when('/catering', {
   templateUrl: '/views/catering.html'
  }).when('/banquets', {
   templateUrl: '/views/banquets.html'
  }).when('/menu', {
   templateUrl: '/views/menu.html'
  }).when('/contact', {
   templateUrl: '/views/contact.html'
  }).otherwise({
   redirectTo: '/home'
  })
};
