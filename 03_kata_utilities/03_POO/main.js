class Animal {
    // atributo
    constructor(nombre, edad, color, raza, tipo){
        this.nombre = nombre
        this.edad = edad
        this.color = color
        this.raza = raza
        this.tipo = tipo 
    }

    //Metodo
    dormir(){
        return `Mi mascota llamado ${this.nombre} duerme porque ya tiene ${this.edad}`
    }
    comer(){
        return `${this.nombre} come mucha galleta`
    }
}
    const miMascota = new Animal('Paco', 2, 'cafe', 'cruza', 'perro')
    const miMascota2 = new Animal('Rocko', 5)

    console.log(miMascota)
    console.log(miMascota.dormir())
    console.log(miMascota2)
    console.log(miMascota2.dormir())
    console.log(miMascota.comer())


//Challege

    // Crear una clase llamada automovil, y van a tener 3 propiedades. color, marca, deportivo=bolean
        // 2 metodos (Lo que quieran)
        
        // crear 3 carros distintos
