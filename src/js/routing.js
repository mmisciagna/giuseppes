/** @ngInject */
module.exports = ($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
   templateUrl: '/views/home.html'
  }).when('/home', {
   templateUrl: '/views/home.html'
  }).when('/about', {
   templateUrl: '/views/home.html'
  }).when('/catering', {
   templateUrl: '/views/home.html'
  }).when('/banquets', {
   templateUrl: '/views/home.html'
  }).when('/menu', {
   templateUrl: '/views/home.html'
  }).when('/contact', {
   templateUrl: '/views/home.html'
  }).otherwise({
   redirectTo: '/home'
  })
};
