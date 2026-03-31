export abstract class Produtos {

    private _id!: number;
    private _nome!: string;
    private _preco!: number;
    private _quantidade!: number;
    private _categoria!: string;
    
    constructor (){}

    public get id(){
        return this._id;
    }
    public set id(id: number){
        this._id = id; 
    }

    public get nome(){
        return this._nome;
    }
    public set nome(nome: string){
        this._nome = nome; 
    }
    
    public get preco(){
        return this._preco;
    }
    public set preco(preco: number){
        this._preco = preco; 
    }

    public get quantidade(){
        return this._quantidade;
    }
    public set quantidade(quantidade: number){
        this._quantidade = quantidade; 
    }

    public get categoria(){
        return this._categoria;
    }
    public set categoria(categoria: string){
        this._categoria = categoria; 
    }


    public visualizar(): void {
        console.log("=======================================");
        console.log("                                       ");
        console.log(`Código do Produto:  ${this._id}`);
        console.log(`Nome do Produto:  ${this._nome}`);
        console.log(`Preço do Produto: R$ ${this._preco.toFixed(2)}`);
        console.log(`Quantidade do Produto: ${this._quantidade}`);
        console.log(`Categoria do Produto: ${this._categoria}`);
        console.log("                                       ");
        console.log("=======================================");
    }

}