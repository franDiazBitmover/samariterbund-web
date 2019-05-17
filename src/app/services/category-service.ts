import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable()
export class CategoryService {

  findAll(): Observable<Category[]> {
    return of([
      {
        id: 1,
        name: 'Western',
      },
      {
        id: 2,
        name: 'Scifi'
      },
      {
        id: 3,
        name: 'Drama'
      },
      {
        id: 4,
        name: 'Horror'
      }
    ]);
  }

  findOne(id: number): Observable<Category> {
    return of({
      id: 2,
      name: 'Scifi'
    });
  }
}