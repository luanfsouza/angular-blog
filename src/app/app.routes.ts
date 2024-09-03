import { ContentComponent } from './pages/content/content.component';
import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((h) => h.HomeComponent),
  },
  {path: "content/:id", pathMatch:"full", component: ContentComponent}
];
