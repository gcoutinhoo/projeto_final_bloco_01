import { Produtos } from "./Produtos";

export class ProdutosHardware extends Produtos {

    public visualizar(): void {
        super.visualizar();
        console.log("Categoria: Hardware");
    }

}