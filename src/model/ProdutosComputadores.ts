import { Produtos } from "./Produtos";

export class ProdutosComputadores extends Produtos {

    private _notebook!: boolean;

    public get notebook(): boolean{
        return this._notebook;
    }

    public set notebook(valor: boolean){
        this._notebook = valor;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Tipo: ${this._notebook ? "Notebook" : "Desktop"}`);
    }


}