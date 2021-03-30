import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from './produto';
// ----------------- detalhe de produto -------------------------
//importando o dialog para receber o produto-detalhe-component
import { MatDialog } from '@angular/material/dialog';
//importando o produto-detalhe
import {ProdutoDetalheComponent} from '../produto-detalhe/produto-detalhe.component';
// ----------------- detalhe de produto -------------------------
//formulario reativo
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar'; //para a mensagem de cadastrado com sucesso

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
 //formGroup que vai para o form
  formulario: FormGroup;
  produtos : Produto[] = []; //array de contatos


  colunas = ['foto', 'id', 'nome', 'valor'];
  totalElementos = 0;
  pagina = 0; //primeira pagina
  tamanho = 10; //elementos por pagina
  pageSizeOptions : number[] = [10];

  constructor(
    private service: ProdutoService,
    private fb: FormBuilder,
    private dialog: MatDialog, //
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.montarFormulario();
    this.listarProdutos(this.pagina, this.tamanho);
    
  }

   montarFormulario(){
     //valida os campos
    this.formulario = this.fb.group({
      //campo obrigatorio
      nome: ['', Validators.required],
      valor: ['', Validators.required]
    })
   }

 

   //valores por padrão
  listarProdutos(pagina = 0, tamanho = 0){
    this.service.list(pagina, tamanho).subscribe(response => {
        this.produtos = response.content;
        this.totalElementos = response.totalElements; //total de elementos que veio na pesquisa
        this.pagina = response.number;
    })
  }

  //adicionar
  submit(){
    const formValues = this.formulario.value;
    const produto: Produto = new Produto(formValues.nome, formValues.valor) //nome e valor vem do construtor produto.ts
    this.service.save(produto).subscribe( resposta => {
      let lista: Produto[] = [... this.produtos, resposta]; //pegando todos os elementos de produto e joga no array, já fica exibido na lista
      this.produtos = lista;
      //snack bar para mensagem cadastrado com
      this.snackBar.open('Produto cadastrado com sucesso!', 'Sucesso!',{
        duration: 2000  //tempo que vai ficar na tela
      })
      this.formulario.reset(); //limpa o formulario
    })
  }

  uploadFoto(event, produto){
    //upload dos arquivos ele fica em files em forma de array
    const files = event.target.files;
    if(files){
      //pega a primeira foto
      const foto = files[0];
      const formData: FormData = new FormData();
      formData.append("foto", foto); //arquivo da foto
      this.service
        .upload(produto, formData)
        .subscribe(response => this.listarProdutos(this.pagina, this.tamanho)); //chama o listar contatos
    }

  }
  //do detalhe do produto
  visualizarProduto(produto: Produto){
    //abri a caixa
    this.dialog.open(ProdutoDetalheComponent, {
      width: '400px',
      height: '450px',
      data: produto //vem do construtor do produto-detalhe-component
    })
  }

  //para funcionar a troca de pagina através das setas
  paginar(event: PageEvent){
    this.pagina = event.pageIndex;
    this.listarProdutos(this.pagina, this.tamanho);
  }

}
