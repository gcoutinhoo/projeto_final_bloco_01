import { Produtos } from "./Produtos";

export class ProdutosHardware extends Produtos {

        private _tipo: string;

    constructor(tipo: string){
        super();
        this._tipo = tipo;
    }
    public get tipo(){
        return this._tipo;
    }   
    public set tipo(tipo: string){
        this._tipo = tipo;
    }

    public visualizar(): void {
    super.visualizar();
    console.log("                                       ");
    console.log(`Tipo do Hardware: ${this._tipo}`);
    console.log("                                       ");
}

}
