import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //cliente http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'; //botao
import {MatToolbarModule} from '@angular/material/toolbar'; //toolbar
import {MatInputModule} from '@angular/material/input';  //inpur do formulario
import { ProdutoComponent } from './produto/produto.component';

import { ProdutoService } from './produto.service'; //service

import { ReactiveFormsModule } from '@angular/forms'; //formulario reativo do angular
import {MatTabsModule} from '@angular/material/tabs';  //tabs divisão do cadastrar e listar
import { MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; //icones do material.io
import { MatCardModule } from '@angular/material/card'; //cards
import { MatDialogModule } from '@angular/material/dialog';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component'; //caixa de dialogo para exibir as informações do produto
import {MatPaginatorModule} from '@angular/material/paginator';  //paginator
import { MatSnackBarModule } from '@angular/material/snack-bar'; //snack bar para a mensagem de cadastrado com sucesso

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, //botao
    MatToolbarModule, //toolbar
    MatInputModule,
    HttpClientModule, //cliente http
    ReactiveFormsModule, //formulario reativo do angular
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule, //para o card de detalhar produto
    MatPaginatorModule,
    MatSnackBarModule,
    BrowserAnimationsModule
 
   
  ],
  providers: [
    ProdutoService // service de produto
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
