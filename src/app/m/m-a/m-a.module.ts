import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from 'src/app/comps1/a/a.component';
import { A2Component } from 'src/app/comps1/a/a2/a2.component';
import { A1Component } from 'src/app/comps1/a/a1/a1.component';



@NgModule({
  declarations: [AComponent,A1Component,A2Component],
  exports:[AComponent],
  imports: [
    CommonModule
  ]
})
export class MAModule { }
