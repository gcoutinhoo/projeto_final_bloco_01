import { Produtos } from "./Produtos";

export class ProdutosPeriferico extends Produtos {

     private _bluetooth!: boolean;

    public get bluetooth(): boolean{
        return this._bluetooth;
    }

    public set bluetooth(valor: boolean){
        this._bluetooth = valor;
    }

    public visualizar(): void {
    super.visualizar();
    console.log("                                       ");
    console.log(`Bluetooth: ${this._bluetooth? "Sim" : "Não"}`);
    console.log("                                       ");
}

}