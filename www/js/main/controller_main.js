app.controller('mainCtrl', function($scope, $ionicModal, mathFactory) {

    $scope.method_solution = "";
    $scope.resolveHTML = "/templates/welcome.html";
    $scope.resolveGraphics = "/templates/welcome_graphics.html"

    $scope.selectMethod = function(sub) {
        $scope.method_selected = sub;
        $scope.modalMethods.show();
    }

    $scope.openInput = function(sub) {
        $scope.method_solution = sub.name;
        $scope.modalMethods.hide();
        if (sub.in == "xy") {
            $scope.modalXY.show();
        } else if (sub.in == "matriz") {

        } else {

        }
    }

    $scope.solution = function(input) {
        mathFactory.solution($scope.method_solution, input, function(data, html) {
            //$scope.solveTable = dataXy;
            //$scope.solveSum = dataSum;
            $scope.resolveHTML = html.resolve;
            $scope.resolveGraphics = html.graphics;

            $scope.solveProblem = data;
            console.log($scope.solveProblem);
            $scope.modalXY.hide();
        });
    }

    //Modal tabla
    $ionicModal.fromTemplateUrl('templates/modals/modal_xy.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalXY = modal;
    });

    //Modal métodos
    $ionicModal.fromTemplateUrl('modalMethods.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalMethods = modal;
    });
});
