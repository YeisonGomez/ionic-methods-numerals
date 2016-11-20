app.factory('mathFactory', function(minumSquare/*, miNuevoModulo*/) {
    return {

        solution: function(methods, input, callback) {
            if (methods.module == "AJ de curvas") {
                minumSquare.options(input, methods.sub, function(data, html) {
                    callback(data, html);
                });
            }else if(methods.module == "mi_nuevo_modulo"){
            	/*miNuevoModulo.options(input, methods.sub, function(data, html){
            		callback(data, html);
            	});*/
            }
        }

    }
});
