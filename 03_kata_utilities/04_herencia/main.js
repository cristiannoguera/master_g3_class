class Mascota {
    constructor(nombre, patas) {       
        this.nombre = nombre
        this.patas = patas
    }
    comer(){
        return `${this.nombre} esta comiendo`
    }
}
class Perrito extends Mascota {
    constructor (nombre, patas, colorPelaje){
        super(nombre, patas)
        this.colorPelaje = colorPelaje
    }
    ladrar(){
        return 'woooooowf'
    }
};


const Perrito1 = new Perrito('Rocko', 4, 'cafe');

console.log(Perrito1)
console.log(Perrito1.comer())
console.log(Perrito1.ladrar())