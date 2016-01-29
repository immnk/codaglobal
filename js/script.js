angular.module('codaglobal.services', []);
angular.module('codaglobal.controllers', ['codaglobal.services']);

angular.module('codaglobal', ['ui.bootstrap', 'ui.bootstrap.collapse',
 'ui.router', 'ngMaterial', 'ngAnimate', 'codaglobal.controllers', 'codaglobal.services'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

  .state('menu.dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller : 'DashboardCtrl'
  })

  .state('menu.aboutus', {
    url: '/aboutus',
    templateUrl: 'templates/about-us.html'
  })

  .state('menu.contact', {
    url: '/contact',
    templateUrl: 'templates/contact-us.html'
  });

  $urlRouterProvider.otherwise('/menu/dashboard');
});