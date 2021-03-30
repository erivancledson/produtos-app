import { HttpClient, HttpParams } from '@angular/common/http'; //cliente http
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto/produto';

import { environment } from '../environments/environment';
import { PaginaProduto } from './produto/PaginaProduto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

    save(produto: Produto) : Observable<Produto>{
      return this.http.post<Produto>(this.url, produto);
    }

    list(page, size) : Observable<PaginaProduto>{
      const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      return this.http.get<any>(`${this.url}?${params.toString()}`);
    }

    upload(produto: Produto, formData: FormData) : Observable<any>{
      //url, para dizer que é um array de byte responseType: 'blob'
        return this.http.put(`${this.url}/${produto.id}/foto`, formData, { responseType: 'blob' });
    }
}
