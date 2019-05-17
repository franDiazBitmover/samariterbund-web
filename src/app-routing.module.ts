import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { OperationsComponent } from './app/operations/operations.component';
import { CategoriesComponent } from './app/categories/categories.component';
import { VolunteersComponent } from './app/volunteers/volunteers.component';
import { VolunteerComponent } from './app/volunteer/volunteer.component';
import { OperationComponent } from './app/operation/operation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    data: { title: 'Categories' }
  },
  {
    path: 'volunteers',
    component: VolunteersComponent,
    data: { title: 'Volunteers' }
  },
  {
    path: 'new-volunteer',
    component: VolunteerComponent,
    data: { title: 'Volunteer' }
  },
  {
    path: 'volunteer/:id',
    component: VolunteerComponent,
    data: { title: 'Volunteer' }
  },
  {
    path: 'operations',
    component: OperationsComponent,
    data: { title: 'Operations' }
  },
  {
    path: 'new-operation',
    component: OperationComponent,
    data: { title: 'Operation' }
  },
  {
    path: 'operation/:id',
    component: OperationComponent,
    data: { title: 'Operation' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
