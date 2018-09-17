import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationRoutingModule } from './navigation/navigation-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AngularMaterialModule } from './angularMaterialModule/angMaterial.module';
import { NgBootStrapModule } from './ngBootStrapModule/ngBootStrap.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    NavigationRoutingModule,
    NgBootStrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
