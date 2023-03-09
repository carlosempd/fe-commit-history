import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './pages/commits/commits.component';

const routes: Routes = [
  {
    path: 'commits',
    component: CommitsComponent
  },
  { 
    path: '**', 
    redirectTo: 'commits'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
