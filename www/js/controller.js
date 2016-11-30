app.controller('appCtrl', function($scope, $rootScope, $math) {
    $rootScope.formula = "";
    $scope.method_selected = "";

    $scope.methods = $math.getMethods();
    
});
