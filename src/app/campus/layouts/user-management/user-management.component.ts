import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, UserType } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogCreateEditUserComponent } from '../../components/dialog-create-edit-user/dialog-create-edit-user.component';
import { DialogAddInscriptionToUserComponent } from '../../components/dialog-add-inscription-to-user/dialog-add-inscription-to-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userServices: UserService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userServices.getUsers(UserType.pupil).subscribe(data => {
      this.users = data.data;
    });
  }

  openDialogCreateUser() {
    const dialog = this.dialog.open(DialogCreateEditUserComponent, {
      width: '500px',
      disableClose: true
    });

    dialog.afterClosed().subscribe(data => {
      if (data.action && data.data) {
        this.getUsers();
        this.openSnackbar('Usuario creado con éxito');
      } else if (data.action && !data.data) {
        this.openSnackbar('No se pudo crear el usuario');
      }
    });
  }

  openDialogCreateInscription(pupilId: number) {
    const dialog = this.dialog.open(DialogAddInscriptionToUserComponent, {
      width: '500px',
      disableClose: true,
      data: {
        pupilId
      }
    });

    dialog.afterClosed().subscribe(data => {
      if (data.action && data.data) {
        this.getUsers();
        this.openSnackbar('Inscripción creada con éxito');
      } else if (data.action && !data.data) {
        this.openSnackbar('No se pudo crear la inscripción');
      }
    });
  }

  openSnackbar(message: string) {
    this.snackbar.open(message, 'OK', {
      duration: 3000,
      horizontalPosition: 'center'
    });
  }

}
