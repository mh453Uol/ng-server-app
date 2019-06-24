import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;

  constructor() {}

  ngOnInit() {}

  getSuggestedUsername() {
    const user = this.signUpForm.controls['user'] as FormGroup;
    user.controls['username'].patchValue('abz');
  }
  onSubmitForm(form: NgForm) {
    console.log(form);
    console.log(this.signUpForm);
  }
}
