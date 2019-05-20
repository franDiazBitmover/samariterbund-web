import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service';
import { TokenHolder } from '../services/token-holder';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router, 
    private loginService: LoginService,
    private tokenHolder: TokenHolder) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    this.loginService.login(this.username, this.password)
      .subscribe(response => {
        this.tokenHolder.setToken(response.token);
        this.router.navigate(["operations"]);
      },
        error => console.error(error));
  }
}