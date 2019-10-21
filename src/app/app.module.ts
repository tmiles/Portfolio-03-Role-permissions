import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatCardModule, MatExpansionModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PermissionService } from './services/permission.service';

const MATERIAL_MODULES = [
  MatCardModule, MatExpansionModule, MatSelectModule
]

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, MATERIAL_MODULES ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ PermissionService ]
})
export class AppModule { }
