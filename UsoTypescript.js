var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Variables
var mensaje = "Esto es un mensaje";
var mensaje2 = "Esto es otro mensaje";
var numero1 = 10;
var verdadero = true;
var numero2 = 11;
// POO en typeScript
var Movil = /** @class */ (function () {
    // Uso de constructores
    function Movil(marca, puertas, ruedas) {
        this.marca = marca;
        this.puertas = puertas;
        this.ruedas = ruedas;
    }
    // get y set
    Movil.prototype.getMarca = function () {
        return this.marca;
    };
    Movil.prototype.getPuertas = function () {
        return this.puertas;
    };
    Movil.prototype.getRuedas = function () {
        return this.ruedas;
    };
    Movil.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Movil.prototype.setPuertas = function (puertas) {
        this.puertas = puertas;
    };
    Movil.prototype.setRuedas = function (ruedas) {
        this.ruedas = ruedas;
    };
    return Movil;
}());
var movil1 = new Movil("Ford", 2, 4);
// agregar valores
/*movil1.setMarca("Nissan");
movil1.setPuertas(4);
movil1.setRuedas(4);*/
// Obtener valores
console.log(movil1.getMarca());
console.log(movil1.getPuertas());
console.log(movil1.getRuedas());
// Herencia
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, puertas, ruedas, carga, acoplado) {
        var _this = _super.call(this, marca, puertas, ruedas) || this;
        _this.carga = carga;
        _this.acoplado = acoplado;
        return _this;
    }
    return Camion;
}(Movil));
var camion1 = new Camion("Volvo", 3, 4, 100, true);
console.log(camion1.getMarca());
console.log(camion1.getPuertas());
console.log(camion1.getRuedas());
console.log(camion1.carga);
console.log(camion1.acoplado);
