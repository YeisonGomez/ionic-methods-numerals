app.factory('mathFactory', function(minumSquare) {
    return {

        solution: function(methods, input, callback) {
            if (methods == "Mínimos cuadrados") {
                minumSquare.solve(input, function(data, html) {
                    callback(data, html);
                });
            }
        }

    }
});
