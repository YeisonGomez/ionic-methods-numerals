app.controller('keyboardCtrl', function($scope, $rootScope) {

    $scope.keyboardFirst = [
        [{ ico: "arrow-left-a" }, { ico: "arrow-right-a" }, '(', ')', { ico: "backspace" }],
        ['7', '8', '9', '{', '}'],
        ['4', '5', '6', '*', '/'],
        ['1', '2', '3', '+', '-'],
        [{ ico: "forward" }, '0', '.', ',', '=']
    ];

    $scope.keyboradSecond = [
        ['Minimos Cuadrados'],
        ['Interpolacion lineal'],
        ['x', 'y', 'z', ],
        [{ ico: "forward" }, { ico: "backspace" }, ':']
    ];

    $scope.keyboard = [$scope.keyboardFirst, $scope.keyboradSecond];

    $scope.colorKeyboard = function(value) {
        return !isNaN(value) || (value == '.');
    }

    $scope.addFormula = function(value) {
        if (value == '=') {

        } else if (value.ico == 'backspace') { //Borra secuencialmente
            $rootScope.formula = $rootScope.formula.substring(0, $rootScope.formula.length - 1);

        } else if (value.ico == 'forward') { //Cambia el teclado
            // $ionicSlideBoxDelegate.previous([1]) devovler pestaña
            // $ionicSlideBoxDelegate.next(); //Cambiar pestaña
            $rootScope.formula = "";

        } else if (value.ico == 'arrow-left-a') {
            console.log(document.getElementById('texto'));
            document.getElementById('texto').select();

        } else {
            $rootScope.formula += value;
        }
    }

});
