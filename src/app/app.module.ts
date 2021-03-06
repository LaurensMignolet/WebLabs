import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
//import { FormsModule } from '@angular/forms';
import { ContactFromComponent } from './contact-from/contact-from.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactService } from './services/contact.service';

import {HttpClientModule} from '@angular/common/http';
import { CapitalizePipe } from './pipies/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactFromComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
