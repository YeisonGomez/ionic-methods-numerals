app.run(['$ionicPlatform', function($ionicPlatform) {

    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        if (cordova.platformId == 'android') {
            //StatusBar.backgroundColorByHexString("#3F51B5");
        }
    });
}])

.run(["$rootScope", "$state", function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
    });

}]);
