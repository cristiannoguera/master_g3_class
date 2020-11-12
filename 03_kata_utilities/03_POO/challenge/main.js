class Automovil {
    // atributo
    constructor(marca, color, deportivo, arranque){
        this.marca = marca
        this.color = color
        this.deportivo = deportivo
        this.arranque = arranque
    }
    //Metodo
    velocidad(){
        return `Mi automovil ${this.marca} va de 0 a 100 km/h en ${this.arranque} segundos`
    }
    carga(){
        return `La ${this.marca} puede cargar 2 toneladas en su platon`
    }
}
    const miAutomovil = new Automovil('Ferrari','rojo', true, 3)
    const miAutomovil2 = new Automovil('Dodge', 'amarillo', false)
    const miAutomovil3 = new Automovil('Audi', 'verde neon', true, 4)

    console.log(miAutomovil)
    console.log(miAutomovil.velocidad())
    console.log(miAutomovil2)
    console.log(miAutomovil2.carga())
    console.log(miAutomovil3)
    console.log(miAutomovil3.velocidad())