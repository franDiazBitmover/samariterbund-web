import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { OperationsComponent } from './operations/operations.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CategoriesComponent } from './categories/categories.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerService } from './services/volunteer-service';
import { CategoryService } from './services/category-service';
import { OperationService } from './services/operation-service';
import { OperationComponent } from './operation/operation.component';
import { LoginService } from './services/login-service';
import { TokenHolder } from './services/token-holder';
import { AuthGuardService } from './services/auth-guard-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OperationsComponent,
    OperationComponent,
    CategoriesComponent,
    VolunteersComponent,
    VolunteerComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    VolunteerService,
    CategoryService,
    OperationService,
    LoginService,
    TokenHolder,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}