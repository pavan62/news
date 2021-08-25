import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'black', pathMatch: 'full' },
  {
    path: 'white',
    loadChildren: () =>
      import('./white/white.module').then(m => m.WhitePageModule),
  },
  {
    path: 'yellow',
    loadChildren: () =>
      import('./yellow/yellow.module').then(m => m.YellowPageModule),
  },
  {
    path: 'green',
    loadChildren: () =>
      import('./green/green.module').then(m => m.GreenPageModule),
  },
  {
    path: 'oolong',
    loadChildren: () =>
      import('./oolong/oolong.module').then(m => m.OolongPageModule),
  },
  {
    path: 'black',
    loadChildren: () =>
      import('./black/black.module').then(m => m.BlackPageModule),
  },
  {
    path: 'dark',
    loadChildren: () =>
      import('./dark/dark.module').then(m => m.DarkPageModule),
  },
  {
    path: 'puer',
    loadChildren: () =>
      import('./puer/puer.module').then(m => m.PuerPageModule),
  },
  {
    path: 'herbal',
    loadChildren: () =>
      import('./herbal/herbal.module').then(m => m.HerbalPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
