import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginRoutes } from './login.routes';
import { UserService } from '../../services/user.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class LoginModule {}
