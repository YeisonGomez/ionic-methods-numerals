app.controller('modalXYCtrl', function($scope) {
    $scope.numTable = [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 }
    ];
    var i = 3;
    $scope.deleteRow = function() {
        var n = $scope.numTable.length;
        $scope.numTable.splice(n - 1, n);
    }
    
    $scope.addRow = function() {
        $scope.numTable.push({ "x": ++i, "y": '' });
    }
});
