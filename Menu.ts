import readlinesync from "readline-sync";
import { Produtos  } from "./src/model/Produtos"; 
import { ProdutosHardware } from "./src/model/ProdutosHardware";
import { ProdutosComputadores } from "./src/model/ProdutosComputadores";
import { ProdutosPeriferico } from "./src/model/ProdutosPreferico";

export function main(){

    //Teste
    /*let produto = new ProdutosPeriferico("Mouse");
    produto.id = 1;
    produto.nome = "Mouse Gamer";
    produto.preco = 150;
    produto.quantidade = 10;
    produto.categoria = "Periférico";
    produto.tipo = "Mouse";

    produto.visualizar();*/
    let opcao: number;


    while (true) {
        console.log("=======================================");
        console.log("                                       ");
        console.log("          Bem Vindo ao nozamA          ");
        console.log("                                       ");
        console.log("=======================================");
        console.log("                                       ");
        console.log("        1 - Cadastrar Produtos         ");
        console.log("        2 - Listar Produtos            ");
        console.log("        3 - Remover Produtos           ");
        console.log("        4 - Atualizar Produtos         "); 
        console.log("        5 - Buscar Produtos            ");
        console.log("                                       ");
        console.log("        6 - Sair                       "); 
        console.log("                                       ");
        console.log("=======================================");
        console.log("                                       ");
        console.log("Digite a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 6){
            console.log("\n       Volte Sempre!\n      nozamA de Z a A         ");
            process.exit(0);
        }

        switch(opcao){
            case 1: 
                console.log("\nCadastrar Produtos\n");
            keyPress()    
            break;

            case 2:
                console.log("\nListar Produtos\n");
            keyPress()
            break;

            case 3: 
                console.log("\nRemover Produtos\n");
            keyPress()
            break;

            case 4: 
                console.log("\nAtualizar Produtos\n");
            keyPress()
            break;

            case 5:
                console.log("\nBuscar Produtos\n");
            keyPress()
            break;

            default:
                console.log("\nOpção inválida\n");
            keyPress()
            break;
        }
    }
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();