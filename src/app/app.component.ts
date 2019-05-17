import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenHolder } from './services/token-holder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService, private tokenHolder: TokenHolder) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  isAuthenticated() {
    return this.tokenHolder.isAuthenticated();
  }
}
