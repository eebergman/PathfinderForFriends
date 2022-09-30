import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AncestryComponent } from './features/ancestry/ancestry.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'ancestries',
        component: AncestryComponent
      }
    ]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '*',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
