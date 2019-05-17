import { Injectable } from '@angular/core';
import { tokenKey } from '@angular/core/src/view';

@Injectable()
export class TokenHolder {

    token: string = null;

    isAuthenticated(): boolean {
        return this.token != null && this.token.length > 0;
    }
}