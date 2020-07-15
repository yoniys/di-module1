import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './comps1/a/a.component';
import { BComponent } from './comps2/b/b.component';
import { C1Component } from './comps2/b/c1/c1.component';
import { C2Component } from './comps2/b/c2/c2.component';
import { A1Component } from './comps1/a/a1/a1.component';
import { A2Component } from './comps1/a/a2/a2.component';
import { MAModule } from './m/m-a/m-a.module';
import { MBModule } from './m/m-b/m-b.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MBModule,
     MAModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
