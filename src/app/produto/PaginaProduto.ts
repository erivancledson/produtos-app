//para a paginacao

import { Produto } from "./produto";
//adicionar as propriedades que vem do json referente a informações de conteudo
export class PaginaProduto{
    content: Produto[];
    totalElements: number;
    size: number;
    number: number; //numero da pagina
}