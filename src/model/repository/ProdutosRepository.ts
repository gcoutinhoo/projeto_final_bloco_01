import { Produtos } from "../Produtos";

export interface ProdutosRepository {
    
    // CRUD
    buscarProdutos(numero: number): void;
    listarProdutos(): void;
    cadastrar(produto: Produtos): void;
    deletar(produto: Produtos): void;

}