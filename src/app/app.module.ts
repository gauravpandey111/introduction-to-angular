import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { MonsterListComponent } from './monster-list/monster-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    MonsterListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
