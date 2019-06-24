import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TemplateDrivenComponent]
})
export class MyFormsModule { }
