import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { Inscription } from '../../models/inscription';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {

  inscriptions: Inscription[] = [];

  constructor(
    private inscriptionService: InscriptionService
  ) { }

  ngOnInit(): void {
    this.getInscriptions();
  }

  getInscriptions() {
    const userData = JSON.parse(localStorage.getItem('userData')!);

    this.inscriptionService.getPupilInscriptions(userData.id).subscribe(data => {
      this.inscriptions = data.data;
    });
  }

}
