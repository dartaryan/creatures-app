import { Component } from '@angular/core';

@Component({
  selector: 'app-creature-card',
  templateUrl: './creature-card.component.html',
  styleUrls: ['./creature-card.component.scss'],
})
export class CreatureCardComponent {
  creature: any = {
    id: 1,
    name: 'Toby',
    family: 'fire',
    strength: 100,
  };
}
