import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'privado', component: PrivadoComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
