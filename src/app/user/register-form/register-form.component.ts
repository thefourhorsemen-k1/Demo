import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmPasswordValidator} from './confirm-password.validator';
import {User} from '../../shared/user.model';
import {NotificationService} from '../../shared/notification.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: User;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              public service: AuthService,
              public notificationService: NotificationService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-z0-9]{3,15}$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-z]{3,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: ConfirmPasswordValidator.MatchPassword
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      this.service.signUp(value)
        .subscribe(data => {
          console.log(value);
        }, error => {
          console.log(error);
        });
      this.notificationService.success('Submited Successfully!');
    }
  }

}
