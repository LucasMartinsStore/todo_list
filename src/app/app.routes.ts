import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/routes').then((m) => m.LoginRoutes),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/routes').then((m) => m.RegisterRoutes),
  },
];
