app.controller('appCtrl', function($scope, $rootScope) {
    $rootScope.formula = "";
    $scope.method_selected = "";

    $scope.methods = [{
        name: "AJ de curvas",
        sub: [
            { name: "Mínimos cuadrados", in : "xy" },
            { name: "Interpolación lineal", in : "xy" }
        ]
    }, {
        name: "5 Métodos",
        sub: [
            { name: "Punto fijo", in : "formula" },
            { name: "Bisección", in : "formula" },
            { name: "Newton Raphson", in : "formula" },
            { name: "Regla falsa", in : "formula" }
        ]
    }, {
        name: "Matriz",
        sub: [
            { name: "Gauss Jordan", in : "matriz" }
        ]
    }];
});
