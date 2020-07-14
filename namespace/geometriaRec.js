"use strict";
var GeometriaRec;
(function (GeometriaRec) {
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
    })(Area = GeometriaRec.Area || (GeometriaRec.Area = {}));
})(GeometriaRec || (GeometriaRec = {}));
//# sourceMappingURL=geometriaRec.js.map