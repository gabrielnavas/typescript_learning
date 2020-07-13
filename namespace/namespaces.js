"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    function circuferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circuferencia = circuferencia;
    function areaRetangulo(base, altura) {
        return base * altura;
    }
    Areas.areaRetangulo = areaRetangulo;
})(Areas || (Areas = {}));
console.log(Areas.circuferencia(10));
console.log(Areas.areaRetangulo(10, 20));
//# sourceMappingURL=namespaces.js.map