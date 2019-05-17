import { Volunteer } from '../model/volunteer';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class VolunteerService {

  findAll(): Observable<Volunteer[]> {
    return of([
      {
        id: 1,
        name: 'John Doe',
        categories: []
      },
      {
        id: 2,
        name: 'Jane Fonda',
        categories: []
      },
      {
        id: 3,
        name: 'Jason',
        categories: []
      },
      {
        id: 4,
        name: 'Freddy',
        categories: []
      }
    ]);
  }

  findOne(id: number): Observable<Volunteer> {
    return of({
      id: 1,
      name: 'John Doe',
      categories: [
        {
          id: 2,
          name: 'Scifi'
        },
      ]
    });
  }
}