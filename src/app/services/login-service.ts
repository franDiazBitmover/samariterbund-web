import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class LoginService {

  login(username: string, password: string): Observable<string> {
    if (username == 'admin' && password == 'admin') {
      return of("the-token")
    } else {
      return throwError('Invalid credentials');
    }
  }
}