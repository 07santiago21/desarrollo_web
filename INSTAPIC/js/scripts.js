class Personaje {
#lema;
#atacando = false;
#nivel = 1000;

constructor(nombre, alter) {
    this.nombre = nombre;
    this.alter = alter;
}

decirLema() {
    return this.#lema;
}

recibirAtaque(valor) {
    this.#nivel -= valor;
}

get getNivel() {
    return this.#nivel;
}

set setLema(lema) {
    this.#lema = lema;
}

get getLema() {
    return `Hola soy ${this.nombre}, ${this.#lema}`;
}

set setAtacando(value){
    this.#atacando = value
}

get getAtacando(){
    return this.#atacando
}


}




class Hero extends Personaje {



saludar() {
    console.log('Hola');
}
}

class Villano extends Personaje {
decirLema() {
    console.log(`SOY EL MAS MALO ${super.decirLema()}`);
}
}

let spiderman = new Hero('Spiderman', 'Queens');
let ironman = new Hero('Ironman', 'New York');
let greenGoblin = new Villano('Green Goblin', 'New York');

spiderman.saludar();
console.log(spiderman.getNivel)
ironman.decirLema();
greenGoblin.decirLema();



const spidermanAtaca = () => {
let valorAtaque = Math.floor(Math.random() * 100);

greenGoblin.recibirAtaque(valorAtaque);
window.document.getElementById('goblinLevel').innerText = greenGoblin.getNivel;

cambiar_spiderman();

element = document.getElementById("Green_goblin")
element.src="../images/green_goblin.jpg"


}

const goblinAtaca = () => {
let valorAtaque = Math.floor(Math.random() * 100);

spiderman.recibirAtaque(valorAtaque);
window.document.getElementById('spidermanLevel').innerText = spiderman.getNivel;
cambiar_green_goblin()

element = document.getElementById("Spiderman")
element.src="../images/spiderman.png"


}




function cambiar_spiderman(){

    element = document.getElementById("Spiderman")
    element.src="../images/spiderman_atacando.jpg"
   


    element = document.getElementById("Green_goblin")
    element.src="../images/green_goblin.jpg"




    if (greenGoblin.getNivel<= 0){alert("gano spiderman")}

}



function cambiar_green_goblin(){

    element = document.getElementById("Green_goblin")
    element.src="../images/green_goblin_atacando.jpg"
    

   
    element = document.getElementById("Spiderman")
    element.src="../images/spiderman.png"
           
    if (spiderman.getNivel <= 0){alert("gano green goblin")}

}


