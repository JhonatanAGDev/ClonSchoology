import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SsoComponent } from './sso/sso.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    ForgotComponent,
    SsoComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
