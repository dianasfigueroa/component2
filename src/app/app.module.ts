import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button2/button2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonComponent,
    Button2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
