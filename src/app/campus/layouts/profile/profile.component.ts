import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
    this.user = JSON.parse(localStorage.getItem('userData')!);

    if (this.user)
      this.pasteDataToForm(this.user);
  }

  ngOnInit(): void { }

  pasteDataToForm(user: User) {
    this.form.get('name')?.setValue(user.name);
    this.form.get('last_name')?.setValue(user.last_name);
    this.form.get('username')?.setValue(user.username);
    this.form.get('birthdate')?.setValue(user.birthdate);

    this.form.get('name')?.disable();
    this.form.get('last_name')?.disable();
    this.form.get('username')?.disable();
    this.form.get('birthdate')?.disable();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      birthdate: ['', [Validators.required]]
    });
  }
}
