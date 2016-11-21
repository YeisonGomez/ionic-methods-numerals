# Aplicación ionica para soluciones matemáticas #

Nume es una aplicación movil desarrollada en ionic 1, la cual busca resolver problemas matemáticos, con una interfaz amigable y sencilla para el usuario.

## Instalación #

```bash
$ git clone https://github.com/YeisonGomez/ionic-methods-numerals.git
$ cd ionic-methods-numerals
$ ionic serve
```

# Contribuir #
Para contribuir y agregar nuevos modulos a Nume, debes tener conceptos basicos de Angular 1 y highcharts-ng. Siguiendo unos cuantos pasos la implementación de un nuevo modulo sera muy sencillo y funcional. 

**Paso 1**

- En el editor de codigo ubicarse en: /www/js/math/
- Crear nuevo modulo: /www/js/math/mi_nuevo_modulo/
- Dentro del nuevo modulo crear 3 archivos, ejemplo: 
	1. mi_nuevo_modulo.js
	2. view_mi_nuevo_modulo.html
	3. view_graphics.html
- En el /www/index.html déspues del <body>:
	
	```javascript
		<script src="js/math/mi_nuevo_modulo/mi_nuevo_modulo.js"></script>
	```

**Paso 2**

En /www/js/controller.js agregar el nuevo modulo con sus sub-modulos

```javascript
	$scope.methods = [
		{
	        name: "AJ de curvas",
	        sub: [
	            { name: "Mínimos cuadrados", in : "xy" }
	        ]
	    },
		{
			name: "mi_nuevo_modulo",
			sub: [
				{name: "Sumar", in: "formula"}
				{name: "Restar", in: "formula"}
			]
		}
	]
```
**in**

Es el tipo de entrada que se va utilizar:

1. **formula:** Activa el input en el header para agregar una fórmula
2. **xy:** Activa un modal con una tabla donde solicita x, y.
3. **matriz:** "En desarrollo"

**Paso 3**

En /www/js/math/math_factory.js agregar 
```javascript
app.factory('mathFactory', function(minumSquare, miNuevoModulo) {
    return {
        solution: function(methods, input, callback) {
            if (methods.module == "AJ de curvas") {
                minumSquare.options(input, methods.sub, function(data, html) {
                    callback(data, html);
                });
            }else if(methods.module == "mi_nuevo_modulo"){
            	miNuevoModulo.options(input, methods.sub, function(data, html){
            		callback(data, html);
            	});
            }
        }
    }
});
```
**Nota:**
miNuevoModulo es el nombre del factory donde se agregara los nuevos metodos, ver el paso 4

**Paso 4**

En el script de el nuevo modulo

```javascript
app.factory('miNuevoModulo', function() {

	var add = function(input) {
            return input.a + input.b;
   	}

	var substract = function(input){
		return input.a - input.b;
	}

    return {
        options: function(input, sub_module, callback){
            var html = {
                resolve: "/js/math/mi_nuevo_modulo/view_mi_nuevo_modulo.html",
                graphics: "/js/math/mi_nuevo_modulo/view_graphics.html"
            };

            if(sub_module == "Sumar"){
            	callback(add(input), html);
            }else if(sub_module == "Restar"){
				callback(substract(input), html);
            }    
        }
    }
});
```
**Paso 5**

La solución en pantalla para el usuario es editable por el contributor. Para personalizar la vista y mostrar la solución del nuevo modulo se debe agregar en 
"/js/math/mi_nuevo_modulo/view_mi_nuevo_modulo.html"

```html
<h1>La solución del problema es:</h1>
<h2>{{solveProblem}}</h2>
```

**Nota:** {{solveProblem}} es la variable que contiene la respuesta del script proporcionado por el contributor **(no puede ser editable)**.

#Agregar gráfica con [highcharts-ng](https://github.com/pablojim/highcharts-ng)#

Para agregar una grafica se debe llevar a cabo en la respuesta del script, ejemplo:
	
**/www/js/math/mi_nuevo_modulo/mi_nuevo_modulo.js**

```javascript
var add = function(input) {
	var solution = {
		problem: input.a + input.b,
		miGrafica: []
	};

	//chartConfig son las configuraciones que solicita la libreria highcharts-ng
	solution.miGrafica = chartConfig; 
    return solution;
}
```

**/www/js/math/mi_nuevo_modulo/view_graphics.html**

```html
<highchart id="chart1" config="solveProblem.miGrafica"></highchart>
```

**Nota:** solveProblem no puede ser editado
