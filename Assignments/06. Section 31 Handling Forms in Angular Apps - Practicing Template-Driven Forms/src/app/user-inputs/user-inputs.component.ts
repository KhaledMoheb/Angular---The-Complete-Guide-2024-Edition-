import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css']
})
export class UserInputsComponent {
  defaultSubscription = 'Advanced';
  submitted = false;

  user = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.email = form.value.email;
    this.user.subscription = form.value.subscription;
    this.user.password = form.value.password;

    console.log(form.value);

    form.reset({
      subscription: this.defaultSubscription
    });
  }
}
