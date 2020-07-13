"use strict";
var Geometria;
(function (Geometria) {
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
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaRec.js.map