import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { UserRequest, UserType } from '../../models/user';

@Component({
  selector: 'app-dialog-create-edit-user',
  templateUrl: './dialog-create-edit-user.component.html',
  styleUrls: ['./dialog-create-edit-user.component.scss']
})
export class DialogCreateEditUserComponent implements OnInit {

  form!: FormGroup;

  edit!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogCreateEditUserComponent>,
    private userServices: UserService
  ) {
    this.edit = data.edit;
    this.createForm();
  }

  ngOnInit(): void {
  }

  createUser() {

    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const body: UserRequest = {
      name: this.getFormValue('name'),
      last_name: this.getFormValue('last_name'),
      username: this.getFormValue('username'),
      birthdate: this.getFormValue('birthdate'),
      password: this.getFormValue('username'),
      gender: this.getFormValue('gender'),
      contact_information: {
        address: this.getFormValue('address'),
        email: this.getFormValue('email'),
        phone_number: this.getFormValue('phone_number'),
      },
      type: UserType.pupil,
      image_path: ''
    }

    this.userServices.createUser(body).subscribe(
      data => {
        this.dialogRef.close({ action: true, data: data.data })
      },
      err => {
        this.dialogRef.close({ action: true, data: null });
      }
    );
  }

  editUser() {

  }

  getFormValue(control: string) {
    return this.form.get(control)?.value;
  }

  closeDialog() {
    this.dialogRef.close({ action: false });
  }

  hasError(control: string, error: string) {
    return this.form.get(control)?.hasError(error) && this.form.get(control)?.touched;
  }

  get formTitle() {
    return this.edit ? 'Editar usuario' : 'Nuevo usuario';
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      birthdate: [null],
      gender: ['male'],
      phone_number: [''],
      address: [''],
      email: ['']
    });
  }
}
