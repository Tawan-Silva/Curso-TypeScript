// import { ConcessionariaDao } from "./ConcessionariaDao";
// import { MotoDao } from "./MotoDao";
// import { PessoaDao } from "./PessoaDao";
// import { VeiculoDao } from "./VeiculoDao";
// import { CarroDao } from "./CarroDao";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import Veiculo from "./Veiculo";
import Carro from "./Carro";
import Moto from "./Moto";
import { Dao } from './Dao';

let concessionaria = new Concessionaria("", []);
let pessoa: Pessoa = new Pessoa("", "");
let veiculo: Veiculo = new Veiculo();
let carro: Carro = new Carro("JEPP COMPASS", 4);
let moto: Moto = new Moto();

let dao1: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao2: Dao<Pessoa> = new Dao<Pessoa>();

dao1.inserir(concessionaria);
dao2.remover(2);