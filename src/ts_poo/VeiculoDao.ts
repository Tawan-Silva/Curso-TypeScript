import { DaoInterface } from "./DaoInterface";
import Veiculo from "./Veiculo";

export class VeiculoDao implements DaoInterface {

    nomeTabela: string = 'tb_veiculo';

  inserir(object: Veiculo): boolean {
      console.log('lógica de insert');
      return true;
  }

  atualizar(object: Veiculo): boolean {
    console.log('Lógica update');
    return true;
  }

  remover(id: number): Veiculo {
    console.log('Lógica delete');
    return new Veiculo();
  }

  selecionar(id: number): Veiculo {
    console.log('Lógica select');
    return new Veiculo();
  }

  selecionarTodos(): [any] {
    console.log('lógica getAll');
    return [new Veiculo()];
  }

}
