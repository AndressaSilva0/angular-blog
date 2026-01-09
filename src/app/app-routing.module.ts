import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmografiaComponent } from './pages/filmografia/filmografia.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { Routes } from '@angular/router'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content/:id', component: ContentComponent },
  { path: 'filmografia', component: FilmografiaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
