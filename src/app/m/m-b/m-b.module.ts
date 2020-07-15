import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from 'src/app/comps2/b/b.component';
import { C1Component } from 'src/app/comps2/b/c1/c1.component';
import { C2Component } from 'src/app/comps2/b/c2/c2.component';



@NgModule({
  declarations: [ BComponent,C1Component,C2Component],
  exports:[BComponent],
  imports: [
    CommonModule
  ]
})
export class MBModule { }
