import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, UserType } from '../../models/user';
import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InscriptionService } from '../../services/inscription.service';
import { InscriptionRequest } from '../../models/inscription';

@Component({
  selector: 'app-dialog-add-inscription-to-user',
  templateUrl: './dialog-add-inscription-to-user.component.html',
  styleUrls: ['./dialog-add-inscription-to-user.component.scss']
})
export class DialogAddInscriptionToUserComponent implements OnInit {

  form!: FormGroup;

  teachers: User[] = [];
  subjects: Subject[] = [];

  pupilId!: number;

  classDays: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userServices: UserService,
    private subjectServices: SubjectService,
    private inscriptionServices: InscriptionService,
    private dialogRef: MatDialogRef<DialogAddInscriptionToUserComponent>
  ) {
    this.createForm();
    this.pupilId = data.pupilId;
  }

  ngOnInit(): void {
    this.getTeachers();
    this.getSubjects();
  }

  createInscription() {

    const body: InscriptionRequest = {
      pupil_id: this.pupilId,
      subject_id: this.getFormValue('subject_id'),
      teacher_id: this.getFormValue('teacher_id'),
      class_hour: this.getFormValue('class_hour'),
      class_day: this.getFormValue('class_day'),
      note: null
    }

    this.inscriptionServices.createInscription(body).subscribe(
      data => {
        this.dialogRef.close({ action: true, data: data.data })
      },
      err => {
        this.dialogRef.close({ action: true, data: null });
      }
    );
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

  getTeachers() {
    this.userServices.getUsers(UserType.teacher).subscribe(data => {
      this.teachers = data.data;
    });
  }

  getSubjects() {
    this.subjectServices.getSubjects().subscribe(data => {
      this.subjects= data.data;
    });
  }

  createForm() {
    this.form = this.fb.group({
      teacher_id: [null, [Validators.required]],
      subject_id: [null, [Validators.required]],
      class_hour: [''],
      class_day: ['Lunes']
    });
  }
}
