"use strict";
var GeometriaCirc;
(function (GeometriaCirc) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function circuferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circuferencia = circuferencia;
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Area.areaRetangulo = areaRetangulo;
    })(Area = GeometriaCirc.Area || (GeometriaCirc.Area = {}));
})(GeometriaCirc || (GeometriaCirc = {}));
//# sourceMappingURL=geometriaCirc.js.map