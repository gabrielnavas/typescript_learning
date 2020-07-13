namespace Geometria {
    export namespace Area {
        const PI = 3.14;
        
        export function circuferencia(raio: number): number{
            return PI * Math.pow(raio, 2);
        }
        
        export function areaRetangulo(base: number, altura: number): number {
            return base * altura;
        }

    }
}


console.log(Geometria.Area.circuferencia(10));
console.log(Geometria.Area.areaRetangulo(10, 20));
