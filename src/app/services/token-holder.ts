import { Injectable } from '@angular/core';
import { tokenKey } from '@angular/core/src/view';

@Injectable()
export class TokenHolder {

    setToken(token: string) {
        sessionStorage.setItem('token', token);
    }

    getToken(): string {
        return sessionStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        const token = sessionStorage.getItem('token');
        return token != null && token.length > 0;
    }
}