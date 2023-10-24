// Variables
let mensaje= "Esto es un mensaje";
let mensaje2: string = "Esto es otro mensaje";
let numero1: number = 10;
let verdadero:boolean = true;
let numero2:number = 11;

// POO en typeScript
class Movil{
  private marca!: string;
  private puertas!: number;
  private ruedas!: number;

  // Uso de constructores
  constructor(marca:string, puertas:number, ruedas:number) {
    this.marca = marca;
    this.puertas = puertas;
    this.ruedas = ruedas;
  }
  // get y set
  getMarca(){
    return this.marca;
  }
  getPuertas(){
    return this.puertas;
  }
  getRuedas(){
    return this.ruedas;
  }
  setMarca(marca:string){
    this.marca = marca;
  }
  setPuertas(puertas:number){
    this.puertas = puertas;
  }
  setRuedas(ruedas:number){
    this.ruedas = ruedas;
  }

}

let movil1:Movil = new Movil("Ford", 2, 4);
// agregar valores
/*movil1.setMarca("Nissan");
movil1.setPuertas(4);
movil1.setRuedas(4);*/

// Obtener valores
console.log(movil1.getMarca());
console.log(movil1.getPuertas());
console.log(movil1.getRuedas());

// Herencia
class Camion extends Movil{
  carga!: number;
  acoplado!: boolean;

  constructor(marca: string, puertas: number, ruedas: number, carga: number, acoplado: boolean) {
    super(marca, puertas, ruedas);
    this.carga = carga;
    this.acoplado = acoplado;
  }

}

let camion1:Camion =  new Camion("Volvo",3,4,100, true);
console.log(camion1.getMarca());
console.log(camion1.getPuertas());
console.log(camion1.getRuedas());
console.log(camion1.carga);
console.log(camion1.acoplado);
