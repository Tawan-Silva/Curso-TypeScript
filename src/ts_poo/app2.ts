import Carro from './Carro';
import Pessoa  from './Pessoa';
import Concessionaria  from './Concessionaria';

/* --- CRIAR CARROS --- */
let carroA = new Carro('Volvo XC90' , 4);
let carroB = new Carro('TIGGO 8 PRO' , 4);
let carroC = new Carro('JEEP COMPASS' , 4);


/* --- MONTAR A LISTA DE CARROS DA CONCESSIONARIA --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av Cebola', listaDeCarros)

/*--- EXIBIR LISTA DE CARROS */
// console.log(concessionaria.mostrarListaDeCarros());

/* --- COMPRAR CARRO --- */
let cliente  = new Pessoa('Tawan', 'VOLVO XC90');

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
 
  if(carro['modelo'] == cliente.dizerCarroPreferido()) {
    // comprar o carro
    cliente.comprarCarro(carro);
  }
});

console.log(cliente.dizerCarroQueTem());
