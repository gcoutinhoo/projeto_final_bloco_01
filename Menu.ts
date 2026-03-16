// Menu.ts
import readlinesync from "readline-sync";
import { Produtos } from "./src/model/Produtos";
import { ProdutosHardware } from "./src/model/ProdutosHardware";
import { ProdutosComputadores } from "./src/model/ProdutosComputadores";
import { ProdutosPeriferico } from "./src/model/ProdutosPeriferico"; 
import { ProdutosController } from "./src/controller/ProdutosController";

export function main() {
const produto = new ProdutosController();

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
    console.log("Digite a opção desejada: ");
    const opcao: number = readlinesync.questionInt("");

    if (opcao === 6) {
        console.log("                                       ");
        console.log("\n       Volte Sempre!\n      nozamA de Z a A         ");
        console.log("                                       ");
        process.exit(0);
    }

        switch (opcao) {
            case 1: {
                console.log("\nCadastrar Produto");
                console.log("\n1 - Periférico \n2 - Hardware \n3 - Computador");
                const opcaoProduto = readlinesync.questionInt("\nDigite a opção desejada: ");

                let novoProduto: Produtos = opcaoProduto === 1 ? new ProdutosPeriferico() : opcaoProduto === 2 ? new ProdutosHardware() : new ProdutosComputadores();

                novoProduto.nome = readlinesync.question("Digite o nome do produto: ");
                novoProduto.preco = readlinesync.questionFloat("Digite o preço do produto: ");
                novoProduto.quantidade = readlinesync.questionInt("Digite a quantidade: ");

                    if (novoProduto instanceof ProdutosHardware) {
                        novoProduto.categoria = readlinesync.question("Digite a categoria: ");
                    }
                    if (novoProduto instanceof ProdutosPeriferico) {
                        novoProduto.bluetooth = readlinesync.keyInYNStrict("Possui bluetooth? ");
                    }
                    if (novoProduto instanceof ProdutosComputadores) {
                        novoProduto.notebook = readlinesync.keyInYNStrict("É notebook? ");
                    }

                novoProduto.id = produto.gerarId();
                produto.cadastrar(novoProduto);

                keyPress();
                break;
            }

            case 2: {
                console.log("\nListar Produtos\n");
                produto.listarProdutos();
                keyPress();
                break;
            }

            case 3: {
                console.log("\nRemover Produtos\n");
                const idRemover = readlinesync.questionInt("Digite o ID do produto: ");
                produto.deletar(idRemover);
                keyPress();
                break;
            }

            case 4: {
                console.log("\nAtualizar Produtos\n");
                const idAtualizar = readlinesync.questionInt("Digite o ID do produto: ");
                const existente = produto.buscarNoArray(idAtualizar); 

                    if (!existente) {
                    console.log("Produto não encontrado!");
                keyPress();
                break;
                }
                console.log("\nDeixe em branco para manter o valor atual.");

                const novoNome = readlinesync.question(`Nome atual (${existente.nome}): `);
                const novoPrecoStr = readlinesync.question(`Preço atual (${existente.preco}): `);
                const novaQtdStr = readlinesync.question(`Quantidade atual (${existente.quantidade}): `);
                const novaCat = readlinesync.question(`Categoria atual (${existente.categoria}): `);

                    if (novoNome) existente.nome = novoNome;
                    if (novoPrecoStr) existente.preco = Number(novoPrecoStr);
                    if (novaQtdStr) existente.quantidade = Number(novaQtdStr);
                    if (novaCat) existente.categoria = novaCat;

                    if (existente instanceof ProdutosPeriferico) {
                        if (readlinesync.keyInYN("Deseja alterar se é bluetooth ou não? ")){
                            existente.bluetooth = readlinesync.keyInYNStrict("Possui bluetooth? ");
                        }
                    }
                    if (existente instanceof ProdutosComputadores) {
                        if (readlinesync.keyInYN("Deseja alterar o tipo? ")){
                            existente.notebook = readlinesync.keyInYNStrict("É notebook? ");
                        }
                    }

                produto.atualizar(existente);

            keyPress();
            break;

            }
            case 5: {
                console.log("\nBuscar Produtos\n");
                const idBuscar = readlinesync.questionInt("Digite o ID do produto: ");
                produto.buscarProdutos(idBuscar);
                keyPress();
                break;
            }

            default: {
                console.log("\nOpção inválida\n");
                keyPress();
                break;
            }
        }
    }
function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
  }
}

main();
