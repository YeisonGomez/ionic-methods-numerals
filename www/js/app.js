var app = angular.module('nume', ['ionic', 'chart.js']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl'
    })

    $urlRouterProvider.otherwise('/main');
});
