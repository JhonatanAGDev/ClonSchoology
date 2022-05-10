import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { SsoComponent } from './components/sso/sso.component';
import { NominaModule } from './nomina/nomina.module';
import { MenunominaComponent } from './nomina/menunomina/menunomina.component';
import { PagesModule } from './pages/pages.module';
import { AppModule } from './app.module';
import { GaleriaModule } from './galeria/galeria.module';
import { ProductosComponent } from './galeria/productos/productos.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'forgot', component: ForgotComponent},
  { path: 'sso', component: SsoComponent},
  { path: 'nomina', loadChildren:()=> import('./nomina/nomina-routing.module').then(m => NominaModule)},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
