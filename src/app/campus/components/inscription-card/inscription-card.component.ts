import { Component, Input, OnInit } from '@angular/core';
import { Inscription } from '../../models/inscription';

@Component({
  selector: 'app-inscription-card',
  templateUrl: './inscription-card.component.html',
  styleUrls: ['./inscription-card.component.scss']
})
export class InscriptionCardComponent implements OnInit {

  @Input() inscription!: Inscription;

  constructor() { }

  ngOnInit(): void {
    console.log(this.inscription);
  }

  get inscriptionStatus() {
    if (!this.inscription.note) return 'Cursando';
    else if (this.inscription.note > 7) return 'Aprobada';
    else return 'Desaprobada';
  }

}
