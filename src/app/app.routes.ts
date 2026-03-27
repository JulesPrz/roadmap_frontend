import { Routes } from '@angular/router';
import { authGuard } from './infrastructure/guards/auth.guard';

export const routes: Routes = [
//   {
//     path: 'login',
//     loadComponent: () =>
//       import('./presentation/login/login').then(m => m.LoginComponent)
//   },
  {
    path: 'home',
    loadComponent: () =>
      import('./presentation/home/home').then(m => m.Home),
    // canActivate: [authGuard]
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: '**',
     redirectTo: 'home'
  }
];