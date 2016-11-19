app.factory('minumSquare', function() {
    return {

        solve: function(input, callback) {
            var n = input.length;
            var solveMinumSquare = {
                solveTable: [{ x: 'X', y: 'Y', a: 'X * Y', b: 'χ²', c: 'a + b X', d: 'Y - Ŷ' }],
                solveSum: [
                    { symbol: 'Σχ:', value: 0 }, //0
                    { symbol: 'ΣY:', value: 0 }, //1
                    { symbol: 'Σ(X * Y):', value: 0 }, //2
                    { symbol: 'Σ(χ²):', value: 0 }, //3
                    { symbol: 'Σ(Y - Ŷ):', value: 0 } //4
                ],
                solveAB: [],
                solveR: ''
            }
            var solveTable = [{ "x": 'X', "y": 'Y', "a": 'X * Y', "b": 'χ²', "c": 'a + b X', "d": 'Y - Ŷ' }];
            var a, b, c, d, y2 = 0;
            var solveSum = [
                { symbol: 'Σχ:', value: 0 },
                { symbol: 'ΣY:', value: 0 },
                { symbol: 'Σ(X * Y):', value: 0 },
                { symbol: 'Σ(χ²):', value: 0 },
                { symbol: 'Σ(Y - Ŷ):', value: 0 }
            ];

            for (var i = 0; i < n; i++) {
                if (input[i].x == "") {
                    input[i].x = 0;
                }
                if (input[i].y == "") {
                    input[i].y = 0;
                }
                a = input[i].x * input[i].y;
                b = Math.pow(input[i].x, 2);
                c = a + (b + input[i].x);
                d = input[i].y - c;
                y2 += Math.pow(input[i].y, 2);

                solveMinumSquare.solveTable.push({ "x": input[i].x, "y": input[i].y, "a": a, "b": b, "c": c, "d": d });
            }
            for (var i = 1; i < solveMinumSquare.solveTable.length; i++) {
                solveMinumSquare.solveSum[0].value += solveMinumSquare.solveTable[i].x;
                solveMinumSquare.solveSum[1].value += solveMinumSquare.solveTable[i].y;
                solveMinumSquare.solveSum[2].value += solveMinumSquare.solveTable[i].a;
                solveMinumSquare.solveSum[3].value += solveMinumSquare.solveTable[i].b;
                solveMinumSquare.solveSum[4].value += solveMinumSquare.solveTable[i].d;
            }

            solveMinumSquare.solveAB[1] = (n * solveMinumSquare.solveSum[2].value - (solveMinumSquare.solveSum[0].value * solveMinumSquare.solveSum[1].value)) / ((n * solveMinumSquare.solveSum[3].value) - Math.pow(solveMinumSquare.solveSum[0].value, 2));
            solveMinumSquare.solveAB[0] = (solveMinumSquare.solveSum[1].value + (solveMinumSquare.solveAB[1] * solveMinumSquare.solveSum[0].value)) / n;
            var ZXY = solveMinumSquare.solveSum[2].value;
            var ZX = solveMinumSquare.solveSum[0].value;
            var ZY = solveMinumSquare.solveSum[1].value;
            var ZX2 = solveMinumSquare.solveSum[3].value;
            var bug = (ZX2 - (Math.pow(ZX, 2) / n)) * (y2 - (Math.pow(ZY, 2) / n));
            solveMinumSquare.solveR = ((ZXY - ((ZX * ZY) / n)) / Math.sqrt(bug, 2));
            solveMinumSquare.solveR2 = Math.pow(solveMinumSquare.solveR, 2);

            solveMinumSquare.graphics = [];
            for (var i = 1; i < solveMinumSquare.solveTable.length; i++) {
                solveMinumSquare.graphics.push([{ x: solveMinumSquare.solveTable[i].x, y: solveMinumSquare.solveTable[i].y }]);
            }

            var html = {
                resolve: "/js/math/adjust_curve/view_minium_square.html",
                graphics: "/js/math/adjust_curve/view_graphics.html"
            };
            callback(solveMinumSquare, html);
        }

    }
});
