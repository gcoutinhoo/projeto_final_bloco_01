import { Produtos } from "../model/Produtos";
import { ProdutosRepository } from "../repository/ProdutosRepository";

export class ProdutosController implements ProdutosRepository{

    private listaProdutos = new Array<Produtos>();
    numero: number = 0;

    public addProduto(produto: Produtos): void {
        this.listaProdutos.push(produto);
    }

    buscarProdutos(id: number): void {
        let produto = this.buscarNoArray(id);

        if(produto != null){
            produto.visualizar();
        }else{
            console.log("Produto não encontrado!");
        }
    }

    listarProdutos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar();
        }
    }

    cadastrar(produto: Produtos): void {
        this.listaProdutos.push(produto);
    }

    atualizar(produto: Produtos): void {
        const idx = this.listaProdutos.findIndex((p) => p.id === produto.id);
        if (idx === -1) {
        console.log("Produto não encontrado para atualização!");
        return;
        }
        this.listaProdutos[idx] = produto;
        console.log("Produto atualizado com sucesso!");
    }


    deletar(id: number): void {
    try{
        let cont: number = 0;
        let encontrado: boolean = false;

        for(let produto of this.listaProdutos){
            if(produto.id === id){
                this.listaProdutos.splice(cont, 1);
                console.log("Produto removido com sucesso!");
                encontrado = true;
                break;
            }
            cont++;
        }
        if(encontrado === false){
            throw new Error("Produto não encontrado!");
        }
    }catch(error: any){
        console.log(error.message);
    }

}

    public gerarId(): number{
        return ++ this.numero;
    }

    public buscarNoArray(id: number): Produtos | null {

    for(let produto of this.listaProdutos){
        if(produto.id === id){
            return produto;
        }
    }

    return null;
}

}