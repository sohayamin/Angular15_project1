import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  signupForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required,Validators.min(10),Validators.max(50)]),
    email: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}')]),
    password: new FormControl('',[Validators.required,Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),
    gender: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    accept: new FormControl('',[Validators.required])
  })

  onHandleSubmit() {
    console.log(this.signupForm.controls);
  }

  get f() {
    return this.signupForm.controls;
  }

}
