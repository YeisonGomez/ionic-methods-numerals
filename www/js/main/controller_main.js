app.controller('mainCtrl', function($scope, $ionicModal, mathFactory) {

    $scope.method_solution = "";
    $scope.resolveHTML = "/templates/welcome.html";
    $scope.resolveGraphics = "/templates/welcome_graphics.html";

    $scope.showInput = false;


    $scope.selectMethod = function(module, sub) {
        $scope.method_selected = { module: module, sub: sub };
        $scope.modalMethods.show();
    }

    $scope.openInput = function(sub, module) {
        $scope.method_solution = { module: module, sub: sub.name };
        $scope.modalMethods.hide();

        if (sub.in == "xy") {
            $scope.modalXY.show();
            $scope.showInput = false;
        } else if (sub.in == "formula") {
            $scope.showInput = true;
        } else {

        }
    }

    $scope.solution = function(input) {
        mathFactory.solution($scope.method_solution, input, function(data, html) {
            $scope.resolveHTML = html.resolve;
            $scope.resolveGraphics = html.graphics;
            $scope.solveProblem = data;
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
