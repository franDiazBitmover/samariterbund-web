import { TokenHolder } from './token-holder';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private tokenHolder: TokenHolder) {

    }
    
    canActivate(): boolean {
        if (!this.tokenHolder.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}