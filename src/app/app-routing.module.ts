import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path : 'movies',
    component : MoviesComponent,
  },
  {
    path : 'home',
    component : HelloworldComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
