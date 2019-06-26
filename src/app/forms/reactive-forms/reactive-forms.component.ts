import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userdata: new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl('male'),
        hobbies: new FormArray([])
      })
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const hobbies = this.signupForm.get('userdata.hobbies') as FormArray;
    hobbies.push(new FormControl());
  }

  get hobbies() {
    const hobbies = this.signupForm.get('userdata.hobbies') as FormArray;
    return hobbies.controls;
  }
}
