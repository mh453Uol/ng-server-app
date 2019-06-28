import { Observable } from 'rxjs';
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
  forbiddenUsernames = ['chris', 'anna'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userdata: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this)
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          [this.forbiddenEmails] // async validator
        ),
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

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    const value = control.value;
    const contain = this.forbiddenUsernames.includes(value);

    if (contain) {
      return { forbiddenName: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ forbiddenEmail: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
