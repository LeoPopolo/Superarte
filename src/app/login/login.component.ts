import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  login() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const body = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value
    }

    this.authService.login(body).subscribe(data => {
      localStorage.setItem('userData', JSON.stringify(data.data));
      localStorage.setItem('token', data.token);
      const userType = data.data.type;
      let path = '';

      if (userType === 'admin')
        path = 'user-management';
      else if (userType === 'pupil')
        path = 'inscriptions';

      this.router.navigate(['/campus', path]);
    });
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  hasError(control: string, error: string) {
    return this.form.get(control)?.hasError(error) && this.form.get(control)?.touched;
  }

}
