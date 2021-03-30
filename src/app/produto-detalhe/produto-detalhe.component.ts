import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA }  from '@angular/material/dialog';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProdutoDetalheComponent>,
     @Inject(MAT_DIALOG_DATA) public produto: Produto //pega os objetos e passa para o dialog
  ) { }

  ngOnInit(): void {
  }

  fechar(){
    this.dialogRef.close();
  }

}
