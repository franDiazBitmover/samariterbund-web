import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { TokenHolder } from './token-holder';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient, private tokenHolder: TokenHolder) { }

  findAll(): Observable<Category[]> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Auth-Token', this.tokenHolder.getToken());

    return this.httpClient.get<Category[]>(environment.restBaseUrl + '/categories', { headers });
  }

  findOne(id: number): Observable<Category> {
    return this.httpClient.get<Category>('');
  }

  save(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(environment.restBaseUrl + '/categories', category);
  }

  delete(category: Category): Observable<any> {
    return this.httpClient.delete<any>(environment.restBaseUrl + '/categories/' + category.name);
  }
}