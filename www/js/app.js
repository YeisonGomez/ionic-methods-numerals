var app = angular.module('nume', ['ionic', 'highcharts-ng', 'ng-math-factory']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl'
    })

    $urlRouterProvider.otherwise('/main');
});
