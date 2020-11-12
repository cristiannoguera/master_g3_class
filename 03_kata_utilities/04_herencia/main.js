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
}
class Gato extends Mascota {
    constructor (nombre, patas, raza){
        super(nombre, patas)
        this.raza = raza
    }
    maulla(){
        return 'miauuuuu'
    }
}
class Hamters extends Mascota {
    constructor (nombre, patas, tipo){
        super(nombre, patas)
        this.tipo = tipo
    }
    jugar(){
        return 'yuujuuuu'
    }
}
class Gallina extends Mascota {
    constructor (nombre, patas, alas){
        super(nombre, patas)
        this.alas = alas
    }
    ponedora(){
        return true
    }
    comer2(){
        return `${this.nombre} come mucho maiz`
    }
};

const Perrito1 = new Perrito('Rocko', 4, 'cafe');

console.log(Perrito1)
console.log(Perrito1.comer())
console.log(Perrito1.ladrar())

const Gato1 = new Gato('Michi', 4, 'angora');

console.log(Gato1)
console.log(Gato1.comer())
console.log(Gato1.maulla())

const Hamters1 = new Hamters('Pufi', 4, 'dorado');

console.log(Hamters1)
console.log(Hamters1.comer())
console.log(Hamters1.jugar())

const Gallina1 = new Gallina('Beti', 2, 2);

console.log(Gallina1)
console.log(Gallina1.comer2())
console.log(Gallina1.ponedora())