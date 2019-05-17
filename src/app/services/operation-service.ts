import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Operation } from '../model/operation';

@Injectable()
export class OperationService {

  findAll(): Observable<Operation[]> {
    return of([
      {
        id: 1,
        name: 'Operation Dragon',
        description: "Bruce Lee against the world",
        categories: []
      },
      {
        id: 2,
        name: 'Assassination of Cersei',
        description: "It ain't gonna work and you know it",
        categories: []
      },
      {
        id: 3,
        name: 'Change a bulb',
        description: "We need 3 o 4 men",
        categories: []
      }
    ]);
  }

  findOne(id: number): Observable<Operation> {
    return of({
      id: 1,
      name: 'Operation Dragon',
      description: "Bruce Lee against the world",
      categories: []
    });
  }
}