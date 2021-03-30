export class Produto{
    id: number;
    nome: string;
    valor: number;
    foto: any;

    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
    }
}