import { Produtos } from "../model/Produtos";

export interface ProdutosRepository {
    
    // CRUD
    buscarProdutos(id: number): void;
    listarProdutos(): void;
    cadastrar(produto: Produtos): void;
    atualizar(produto: Produtos): void;
    deletar(id: number): void;

}